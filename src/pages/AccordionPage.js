import Accordion from "../components/Accordion"; 
function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'Can I use React from any project',
      content: 'You can use React.You can use React.You can use React.You can use React.You can use React.You can use React'
    },
    {
      id: '2',
      label: 'Can I use Javascript from any project',
      content: 'You can use Javascript.You can use Javascript.You can use Javascript.You can use Javascript.You can use Javascript.You can use Javascript'
    },
    {
      id: '3',
      label: 'Can I use Css from any project',
      content: 'You can use Css.You can use Css.You can use Css.You can use Css.You can use Css.You can use Css'
    }
  ]
  return <div>
    <Accordion items={items} />
  </div>
}

export default AccordionPage;
