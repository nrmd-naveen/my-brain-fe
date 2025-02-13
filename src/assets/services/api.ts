import apiClient from "./apiClient";

export const login = async (data: { email: string; password: string }) => {
    const res = await apiClient.post("/auth/signin",  {
            username: data.email,
            password: data.password
    });
    localStorage.setItem("token", res.data.token);
    return res.data;
};

export const signUp = async (data: { email: string; password: string }) => {
    const res = await  apiClient.post("/auth/signin",  {
            username: data.email,
            password: data.password
    });
    console.log(res)
  return res.data;
};

export const fetchContents = async () => {
  const { data } = await apiClient.get("/content/all");
  return data;
};

export const addContent = async (content: { title: string; link: string }) => {
    const { data } = await apiClient.post("/content/create",  content );
    // console.log(data)
  return data;
};

export const deleteContent = async (id: number) => {
  await apiClient.post(`/content/delete`, { contentId: id });
  return true;
};
