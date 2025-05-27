
//variables de conexion
const SUPABASE_URL = 'https://jlzgxxcklswdgixzvlvg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impsemd4eGNrbHN3ZGdpeHp2bHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4Nzc5NDcsImV4cCI6MjA2MjQ1Mzk0N30.laziHzAoI9YPnXJHHUbO8nOMkUjfrKoRluOkEKO27gs';
const TABLE = 'clientes';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`; //me indica a que tabla conectarme
const HEADERS = {
    'apikey':SUPABASE_KEY,
    'Authorization':`Bearer ${SUPABASE_KEY}`,
    'Content-Type':'application/json'
};

//funciones de llamado a rest
const listaclientes = () => {
    return fetch(`${API_URL}?select=*`,{headers:HEADERS})
    .then(res=>{
        if(!res.ok)throw new Error('error en listar clientes');
        return res.json();
    });
};
const crearCliente=(nombre,email)=>{
    const cliente={
        nombre,
        email,
        id:uuid.v4()
    };
    return fetch(API_URL,{
        method:'POST',
        headers:HEADERS,
        body:JSON.stringify(cliente)
    })
    .then(async (res)=>{
        if(!res.ok){
            const text=await res.text(); //responde el error en texto para ubicarme
            throw new Error(text || 'error al insertar cliente');
        }
        const text= await res.text();
        return text ? JSON.parse(text):cliente; //si todo bien nos devuelve el cliente
    }).catch((error)=>{
        console.error("error al crear cliente:",error);
        throw error;
    });
};
const eliminarCliente=(id)=>{ //valor de entrada da referencia a elemento eliminar
    return fetch(`${API_URL}?id=eq.${id}`,{
        method:'DELETE',
        headers:HEADERS
    })
    //hacer then y catch
};
const clientes=(id)=>{
    return fetch(`${API_URL}?id=eq.${id}`,{
        headers:HEADERS
    })
    //hacer then y catch
    .then(res => {
        if (!res.ok) throw new Error('Error al obtener cliente');
        return res.json();
    })
    .catch(error => {
        console.error("Error en clientes:", error);
        throw error;
    });
};
const actualizarCliente=(nombre,email,id)=>{
    return fetch(`${API_URL}?id=eq.${id}`,{
        method:'PATCH',
        headers:{
            ...HEADERS,
            'Prefer':'return=representation'
        },
        body:JSON.stringify({nombre,email})
    })
    //hacer then y catch
};
export const clientService={
    listaclientes,
    crearCliente,
    eliminarCliente,
    clientes,
    actualizarCliente
};
