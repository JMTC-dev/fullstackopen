const baseURL = "http://localhost:3001/notes";

// const getAll = async () => {
//   try {
//     const request = await fetch(baseURL);
//     if (!request.ok) {
//       throw new Error(request.status);
//     }
//     console.log("promise fulfilled");
//     const response = await request.json();
//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

const getAll = async () => {
  try {
    const request = await fetch(baseURL);
    if (!request.ok) {
      throw new Error(request.status);
    }
    const nonExisting = {
      id: 10000,
      content: "This note is not saved to the server",
      important: true,
    };
    console.log("promise fulfilled");
    const response = await request.json();
    return response.concat(nonExisting);
  } catch (error) {
    throw new Error(error.message);
  }
};

const create = async (newObject) => {
  const request = await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(newObject),
  });
  const response = await request.json();
  return response;
};

const update = async (id, newObject) => {
  const request = await fetch(`${baseURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(newObject),
  });
  if (!request.ok) {
    console.log("fail");
  }
  const response = await request.json();
  return response;
};

export default {
  getAll,
  create,
  update,
};
