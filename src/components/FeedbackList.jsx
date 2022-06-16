import React, { useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
//import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <div>No Feedbacks</div>;
  }

  // OPTION 1
  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item}/>
        );
      })}
    </div>
  );

  // OPTION 2 with animations
//   return isLoading ? (
//     <Spinner />
//   ) : (
//     <div className='feedback-list'>
//       <AnimatePresence>
//         {feedback.map((item) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <FeedbackItem key={item.id} item={item} />
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
};

export default FeedbackList;
