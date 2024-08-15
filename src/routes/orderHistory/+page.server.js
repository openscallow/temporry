import mysql from 'mysql2/promise';

// Database connection configuration
const dbConfig = {
    host: 'callowdatabase.cpam6os8m3nn.ap-south-1.rds.amazonaws.com',
	user: 'gautam',
	password: 'Gautam404&',
	database: 'callowdb'
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// /** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // SQL query to fetch orders with status 'pending' or 'complete'
        const query = `
            SELECT * 
            FROM \`order\` 
            WHERE status IN ('pending', 'complete')
        `;

        // Execute the query
        const [rows] = await connection.query(query);

        // Release the connection back to the pool
        connection.release();

        // Return the fetched data
        return {
            orders: rows
        };
    } catch (error) {
        console.error('Database query error:', error);
        return {
            error: 'Failed to fetch orders'
        };
    }
}
