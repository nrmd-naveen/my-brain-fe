import apiClient from "./apiClient";

export const login = async (data: { username: string; password: string }) => {
    const res = await apiClient.post("/auth/signin",  {
            username: data.username,
            password: data.password
    });
  console.log(res)
    localStorage.setItem("token", res.data.token);
    return res.data;
};

export const signUp = async (data: { username: string; password: string }) => {
    const res = await  apiClient.post("/auth/signup",  {
            username: data.username,
            password: data.password
    });
    console.log(res)
  return res.data;
};

export const verifyToken = async () => {
      try {
        const response = await apiClient.get("/auth/verify");
        console.log(response)
        if (response.status === 201) return true;
        else return false;
      } catch(err) {
        console.log(err)
        return false;
      }
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
