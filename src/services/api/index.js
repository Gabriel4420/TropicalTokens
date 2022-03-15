import {SiteClient} from 'datocms-client';

export default async function receiverRequest(req,res){
    if(req.method === 'POST'){
        const TOKEN = '447b69adc0d0d947bf2940c6817619';

        const client = new SiteClient(TOKEN);
        //validar os dados antes de sair cadastrando 
        const record = await client.items.create({
          
            ...req.body
           
        })
        console.log(`Token: ${TOKEN}`)
        res.json({
            data:'alguma coisa',
            createdAtRegister: record
        })

        return;
    }

    res.status(404).json({
        message:'Ainda não deu camarada, mais você postou algo :)'
    })
   
}