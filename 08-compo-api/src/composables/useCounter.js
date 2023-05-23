
import { ref } from "vue";

const useCounter  = (initValue = 50) =>{
    const counter = ref(initValue);

    return {
      counter,

      decrease:()=>counter.value--,
      increase:()=> counter.value++,
    }
}

export default useCounter