import Curriculum from "../../../database/models/Curriculum";
import { CurriculumModelAdd } from "../../interfaces/models/CurriculumModel";


class CurriculumCreate {
  public run = async (data : CurriculumModelAdd) => {
    try {
      const curriculum = await Curriculum.create(data);
      return curriculum ? true : false;
    }catch(e){
      console.log(e);
      return false;
    }
  }
}

export default CurriculumCreate;