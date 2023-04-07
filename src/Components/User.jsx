// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import Typography from '@mui/joy/Typography';
// import { useGlobalContext } from '../../context/Context'

// export default function BasicCard() {
//   const { user } = useGlobalContext()

//   return (
//     <Card variant="outlined" sx={{ width: 320, margin: '0 auto' }}>
//       <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
//         Welcome:{user.fullname}
//       </Typography>
//       <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
//         <img
//           src="https://source.unsplash.com/featured/?birds,sky"
//           srcSet="https://source.unsplash.com/featured/?birds,sky 1x, https://source.unsplash.com/featured/?birds,sky 2x"
//           loading="lazy"
//           alt=" birds in sky"
//         />
//       </AspectRatio>
//       <Box sx={{ display: 'flex' }}>
//         <div>
//           <Typography fontSize="lg" fontWeight="lg">
//             {verseText.split(' ').map((word,index) => (
//               <span key={index}>{word} </span>
//             ))} </Typography>
//           <Typography fontSize="s" fontWeight="lg" color="primary" >
//           Your email:{user.email}
//           Your id:{user.id}
//           </Typography>
//         </div>
//       </Box>
//     </Card>
//   );
// }