import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <div>Hello /!</div>
})

interface HomePageProps {

}

export function HomePage({}:HomePageProps){
  // const { primary, secondary, neutral, accent, base, info, success, warning, error } = useSearch({
  //     from: "/",
  // });
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
  
 </div>
);
}
