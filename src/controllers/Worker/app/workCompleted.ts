export default (req : Request, res : Response) => {
  try {
    const { userId , workerId , puntuaction } = req.body;

  }catch(e){
    res.status(500).json({ error : e.message });
  }
}