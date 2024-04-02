
import PropTypes from "prop-types"

const USerData=[
    {
        name:"vibin",
        city:"Villukuri",
        description:"front-end developer",
        skills:["UI / UX","Front End Development","HTML","CSS","Javascript","React","Node"],
        online:true ,
        profile:"images/1.jpeg",

    },
    {
        name:"Akash",
        city:"Paraseri",
        description:"back-end developer",
        skills:["UI / UX","Front End Development","HTML","CSS","Javascript","React","Node"],
        online:true ,
        profile:"images/1.jpeg",
    },
    {
        name:"vibin",
        city:"Nagercoil",
        description:"developer",
        skills:["UI / UX","Front End Development","HTML","CSS","Javascript","React","Node"],
        online:false ,
        profile:"images/1.jpeg",
    },
    {
        name:"vibin",
        city:"Nagercoil",
        description:"developer",
        skills:["UI / UX","Front End Development","HTML","CSS","Javascript","React","Node"],
        online:true ,
        profile:"images/1.jpeg",
    },
]


function User(props){
    return <div className="card-container">
        <span className={props.online ? "pro online":"pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
        <img className="img" src={props.profile} alt="profile" width={"150px"} />
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div className="btn">
        <button className="primary" type="button">Message</button>
        <button className="primary outline" type="button">Following</button>
    </div>
    <div className="skills">
        <h6>Skills</h6>
        <ul>
           {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
           ))}
        </ul>
    </div>
    </div>
}

export const UserCard = () => {
  return (
<>
{/* <User name="vibin" city="Villukuri" description="front-end developer" skills={["UI / UX","Front End Development","HTML","CSS","Javascript","React","Node"]}
    online={true} profile="images/1.jpeg
/>; */}

{
    USerData.map((user,index)=>(
        <User key={index} 
        name={user.name}
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}

        />
    ))
}

</>
        
        
    
    
  )
};

User.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,

}
