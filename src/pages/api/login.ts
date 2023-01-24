// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log(req.body);
    res.status(200).json({
      access_token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjExNCIsImlzcyI6Imh0dHBzOi8vdGVzdGUudml0YXZlcnNlLmNvbS5iciIsImV4cCI6MTY3NDYxNTQ5MiwiaWF0IjoxNjc0NTg2NjkyLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl19.iwqwCenVFlEEpwDpuu55t9YQsbxNl2AhZVpQFhrnLFM",
      expires_in: 1674615492758,
      idUsuario: 39,
      menus: [
        { itens: [], nome: "Home", icone: "Home", tipo: "main", key: "/" },

        {
          itens: [],
          nome: "Agenda",
          icone: "calendar_today",
          tipo: "main",
          key: "/agenda",
        },

        {
          itens: [],
          nome: "Agendamentos",
          icone: "list_alt",
          tipo: "module",
          key: "/agendamentos",
        },

        {
          itens: [],
          nome: "Minha conta",
          icone: "Sliders",
          tipo: "settings",
          key: "/minha-conta",
        },

        {
          itens: [],
          nome: "Clientes",
          icone: "group",
          tipo: "module",
          key: "/clientes",
        },
      ],
      name: "Admin",
      professional: 38,
      refresh_token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY3NDYxNjM5MiwianRpIjoiMjg3ZGE3ZTUtM2I2OC00OTI0LTg0NmEtNjI2NTk1MjEyODA1In0.92JtS5legaNTz1P0KlXWJV4-ynfJAOfAWMFgCQYIASI",
      roles: ["ROLE_ADMIN"],
      username: "admin",
    });
  }
}
