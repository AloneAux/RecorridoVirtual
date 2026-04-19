import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Método no permitido' });
  }

  // Esto viene de React (name="email" y name="numero")
  const { nombre, email, numero, esc_proc, car_inter } = request.body;

  try {
    await sql`
      INSERT INTO registros (nombre, correo, num, esc_proc, car_inter)
      VALUES (${nombre}, ${email}, ${numero}, ${esc_proc}, ${car_inter});
    `;

    return response.status(200).json({ message: 'Registro guardado con éxito' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
}