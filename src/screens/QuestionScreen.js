import {Text,View} from 'react-native';
import { reactQuestions } from './data';
function QuestionScreen(){
    return(
        <View>
            const
            {
                reactQuestions.map((item)=>(
                    <View>
                        <Text>{item.question}</Text>
                    </View>
                ))
            }
        </View>
    )
}
export default QuestionScreen