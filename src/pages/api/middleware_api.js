const PORT = 3001
const ADDRESS = '192.168.0.13'
const MIDDLEWARE_API = `http://${ADDRESS}:${PORT}`

export default async function middleware_api(req, res) {  

  const { data } = await fetch(MIDDLEWARE_API)
    .then((res) => { return res.json() })

    
  res.send({data})
}

export async function get_ramos(){
  const { data } = await fetch(`${MIDDLEWARE_API}/tables/ramos`)
    .then((res) => { return res.json() })
            
  return {
    ramos: data
  }
}

export const insertRamo = async (id, ramo, codigo, semestre) => {
  //with post
  console.log(id, ramo, codigo, semestre);


  const response = await fetch(`${MIDDLEWARE_API}/api/insertRamo`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
      ramo: ramo,
      codigo: codigo,
      semestre: semestre
    })
  }).then((res) => { return res.json() })
    .then((data) => { return data })
    .catch((err) => { return err })




}