import request from "../request";

export function getAllDoc(params: any) {
  return request({
    url: "/portal/getAllDoc",
    method: "get",
    params,
  });
}
