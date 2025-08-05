

export default function Footer(){
  const author="NJU-ISE 231880135 ZuxiChen";
  const communication="himnamnor@gmail.com";
  const github="Himnamnor's GitHub homepage";
  const github_url="https://github.com/Himnamnor"
  const app_name="Furukawa Sports Room";
  return(
    <div className="Footer">
      <span>Author: {author}</span>
      <span>Communication: {communication}</span>
      <a href={github_url}>{github}</a>
      <span>{app_name}</span>
    </div>
  )
}