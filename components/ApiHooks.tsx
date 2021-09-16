import axios from "axios";
import { UseQueryResult, useQuery } from "react-query";
import { TaskData } from "../pages/api/tasks";

export function useHello(): UseQueryResult<{ name: string }> {
  let endPoint = `api/hello`;
  return useQuery(["hello"], async () => {
    const resp = await axios.get(endPoint);
    return resp.data as { name: string };
  });
}

export function useTasks(): UseQueryResult<TaskData> {
  let endPoint = `api/tasks`;
  return useQuery(["hello"], async () => {
    const resp = await axios.get(endPoint);
    return resp.data as TaskData;
  });
}
