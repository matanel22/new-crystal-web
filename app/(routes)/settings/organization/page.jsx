"use client";
import SettingsSearch from "@/components/settings/SettingsSearch";

import TabieSettings from "@/components/settings/TableSettings";
import Image from "next/image";

import OrganizationTable from "@/components/settings/organization/OrganizationTable";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function organization() {
  const headers = ["שם יחידה", "ראש יחידה", "מייל ראש יחידה", "קוד לביא"];
  const [data, setData] = useState();

  // const formtDepartmentData = (data) => {
  //   const formatted = data.reduce((acc, company) => {
  //     acc[company.name] = company.branches.map((branch) => {
  //       return { [branch.name]: branch.sections || [] };
  //     });
  //     return acc;
  //   }, {});

  //   console.log(formatted);
  // };

  useEffect(() => {
    async function fetchDropdownData() {
      try {
        const response = await axios.get(
          "departments?appendBranches=true&appendSections=true"
        );
        console.log(response.data);
        setData(response.data ?? []);
        formtDepartmentData(response.data ?? []);
      } catch (error) {
        console.error("error : ", error);
        throw error;
      }
    }
    fetchDropdownData();
  }, []);

  const formtDepartmentData = (data) => {
    const formatted = data.reduce((acc, company) => {
      acc[company.name] = company.branches.map((branch) => {
        return { [branch.name]: branch.sections || [] };
      });
      return acc;
    }, {});

    console.log(formatted);
  };

  const organizationData = [
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },

    {
      name: " 1שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "neee",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "n666",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "2שם יחידה",
      heade: "שלום",
      email: "shalom@.idf",
      code: 1,
      departments: [
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 9,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "שלום",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "444",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "555",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
        {
          name: "naeho",
          heade: "sss",
          email: "shalom@.idf",
          code: 2,
          branchs: [
            {
              name: "1111",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
            {
              name: "222",
              heade: "שלום",
              email: "shalom@.idf",
              code: 3,
              madors: [
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
                { name: "1111", heade: "שלום", email: "shalom@.idf", code: 3 },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col w-full h-full  ">
        <div className="flex   justify-between items-center w-full p-2">
          <div className="w-full  font-bold text-4xl">ניהול עץ ארגוני</div>
          <SettingsSearch />
        </div>

        <div className="flex-1  overflow-hidden ">
          <div className="h-full   dirLtr  px-2 overflow-auto ">
            <OrganizationTable data={organizationData} headers={headers} />
          </div>
        </div>
        {/* <div className=" flex h-full  flex-col  rounded-lg">
          
        </div> */}
      </div>
    </>
  );
}
