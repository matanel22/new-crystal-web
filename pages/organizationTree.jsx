"use client";
import "./style.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  reconnectEdge,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import dagre from "dagre";
import CustomNode from "@/components/organizationTree/CustomNode";
import CustomEdge from "@/components/organizationTree/CustomEdge";
import BtnWithSelectPopUp from "@/components/organizationTree/BtnWithSelectPopUp";
import axios from "@/lib/axios";
import PopupDisconnect from "@/components/organizationTree/PopupDisconnect";
import PopupDelete from "@/components/organizationTree/PopupDelete";
import Header from "@/components/ui/Header";
import { addNewUnitInServer } from "@/components/organizationTree/PopUpCreateUnit";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 180;
const nodeHeight = 90;

const getLayoutedElements = (nodes, edges) => {
  dagreGraph.setGraph({
    rankdir: "TB",
    ranksep: 70,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.sourcePosition = "bottom";
    node.targetPosition = "top";

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
  });

  return { nodes, edges };
};

export default function OrganizationTreeComponent() {
  const [data, setData] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodesObj, setNodesObj] = useState();
  const [showPopUpSelectUnit, setShowPopUpSelectUnit] = useState(false);
  const [showPopUpDelete, setShowPopUpDelete] = useState(false);
  const [showPopUpDisconnect, setShowPopUpDisconnect] = useState(false);
  const [unitName, setUnitName] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [unitToDeleteOrDisconnect, setUnitToDeleteOrDisconnect] =
    useState(null);

  const nodeTypes = useMemo(() => ({ CustomNode }), []);
  const edgeTypes = useMemo(() => ({ CustomEdge }), []);

  const proOptions = { hideAttribution: true };

  useEffect(() => {
    const nodeObj = {};
    nodes.forEach((node) => {
      nodeObj[node.id] = node;
      setNodesObj(nodeObj);
    });
  }, [nodes]);

  const createTree = () => {
    const initialNodes = [];
    const initialEdges = [];

    const createNode = (name, nodeId, dbId, level) => ({
      id: [nodeId + dbId].toString(),
      data: {
        name,
        dbId,
        level,
        setShowPopUpDelete,
        setShowPopUpDisconnect,
        setUnitToDeleteOrDisconnect,
      },
      position: { x: 0, y: 0 },
      type: "CustomNode",
    });

    const createEdge = (source, target) => ({
      id: `${source}-${target}`,
      source: source,
      target: target,
      type: "CustomEdge",
    });

    const rootNode = createNode(" יחידת על", "highunit-", 789, " יחידת על");
    initialNodes.push(rootNode);

    data.forEach((dep) => {
      initialNodes.push(createNode(dep.name, "dep-", dep.id, "מחלקה"));
      initialEdges.push(createEdge(rootNode.id, "dep-" + dep.id));

      if (dep.branches) {
        dep.branches.forEach((branch) => {
          initialNodes.push(
            createNode(branch.name, "branch-", branch.id, "ענף")
          );
          initialEdges.push(createEdge("dep-" + dep.id, "branch-" + branch.id));

          if (branch.sections) {
            branch.sections.forEach((section) => {
              initialNodes.push(
                createNode(section.name, "section-", section.id, "מדור")
              );
              initialEdges.push(
                createEdge("branch-" + branch.id, "section-" + section.id)
              );
            });
          }
        });
      }
    });

    const layoutedElements = getLayoutedElements(initialNodes, initialEdges);

    setNodes(layoutedElements.nodes);
    setEdges(layoutedElements.edges);
  };

  const fetchAlltheTree = async () => {
    try {
      const respons = await axios.get(
        "departments?appendBranches=true&appendSections=true"
      );
      setData(respons.data);
    } catch (error) {
      setError("Failed to fetch organization data. Please try again later.");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAlltheTree();
  }, []);

  useEffect(() => {
    if (data) {
      createTree();
    }
  }, [data]);

  const onConnect = useCallback(
    async (params) => {
      setEdges((eds) => addEdge({ ...params, type: "CustomEdge" }, eds));

      const parentNode = nodesObj[params.source];
      const parentNodeId = parentNode.data.dbId;

      await addNewUnitInServer(selectedLevel.url, unitName, parentNodeId);
      fetchAlltheTree();

      setUnitName("");
    },
    [nodesObj]
  );

  // const changingUnitAffiliation = (parentId, name) => {};

  // const disconnection = () => {};

  const onEdgeUpdate = useCallback(
    (oldEdge, newConnection) =>
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els)),
    []
  );

  return (
    <div
      onClick={() => setShowPopUpSelectUnit(false)}
      className="bg-white p-2  flex flex-col h-screen"
    >
      <div dir="rtl" className="">
        <Header />
      </div>

      <BtnWithSelectPopUp
        showPopUpSelectUnit={showPopUpSelectUnit}
        setShowPopUpSelectUnit={setShowPopUpSelectUnit}
        setNodes={setNodes}
        unitName={unitName}
        setUnitName={setUnitName}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />
      <div className="bg-[#F7F9FD] flex-1 rounded-lg">
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgeUpdate={onEdgeUpdate}
          proOptions={proOptions}
        >
          <Controls
            showFitView={false}
            showInteractive={false}
            position={"top-right"}
          />
        </ReactFlow>
      </div>
      <div className="text-center pt-1 text-[#A5A5A5]">
        פותח ע"י מסגרת אמ"ת{" "}
      </div>
      {showPopUpDelete && (
        <PopupDelete
          unitToDeleteOrDisconnect={unitToDeleteOrDisconnect}
          setShowPopUpDelete={setShowPopUpDelete}
        />
      )}

      {showPopUpDisconnect && (
        <PopupDisconnect
          unitToDeleteOrDisconnect={unitToDeleteOrDisconnect}
          setShowPopUpDisconnect={setShowPopUpDisconnect}
        />
      )}
    </div>
  );
}
