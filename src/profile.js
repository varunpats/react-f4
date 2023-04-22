import { useState, useEffect } from "react";
import './profile.css';

const Profile = () => {
    let [userData, setUserData] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${localStorage.getItem("id")}`, {
            method: 'get'
        }).then(res => res.json())
            .then(data => {
                setUserData(data);
            })
    }, []);

    return (
        <div className="profileDiv">
            <div className="userData">
                <img src={userData.image} />
                <h3>{`${userData?.firstName} ${userData?.maidenName} ${userData?.lastName} `}</h3>
                <h3>Email : {`${userData?.email} `}</h3>
                <h3>Phone : {`${userData?.phone} `}</h3>
                <h3>Username : {`${userData?.username} `}</h3>
                <h3>Password : {`${userData?.password} `}</h3>
            </div>
            <h2>Personal Details</h2>
            <div className="biologicalData">
                <h3>DOB : {`${userData?.birthDate} `}</h3>
                <h3>Blood : {`${userData?.bloodGroup} `}</h3>
                <h3>Gender : {`${userData?.gender} `}</h3>
                <h3>Age : {`${userData?.age} `}</h3>
                <h3>Height : {`${userData?.height} cm `}</h3>
                <h3>Weight : {`${userData?.weight} `}</h3>
                <h3>Eyecolor : {`${userData?.eyeColor} `}</h3>
                <h3>Hair : {`${userData?.hair?.color}, ${userData?.hair?.type} `}</h3>
                <h3>Address : {`${userData?.address?.address}, ${userData?.address?.city} ${userData?.address?.state} - ${userData?.address?.postalCode} `}</h3>
            </div>
            <h2>Other Details</h2>
            <div className="professionalData">
                <h3>University : {`${userData?.university} `}</h3>
                <h3>Blood : {`${userData?.bloodGroup} `}</h3>
                <h3>Gender : {`${userData?.gender} `}</h3>
                <h3>Age : {`${userData?.age} `}</h3>
                <h3>Height : {`${userData?.height} cm `}</h3>
                <h3>Weight : {`${userData?.weight} kg `}</h3>
                <h3>Eyecolor : {`${userData?.eyeColor} `}</h3>
                <h3>Hair : {`${userData?.hair?.color}, ${userData?.hair?.type} `}</h3>
                <h3>Mac Address : {`${userData?.macAddress} `}</h3>
                <h3>Domain : {`${userData?.domain} `}</h3>
                <h3>IP : {`${userData?.ip} `}</h3>
            </div>
            <h2>Company Details</h2>
            <div className="companyData">
                <h3>Name : {`${userData?.company?.name} `}</h3>
                <h3>Department : {`${userData?.company?.department} `}</h3>
                <h3>Title : {`${userData?.company?.title} `}</h3>
                <h3>Address : {`${userData?.company?.address?.address}, ${userData?.company?.address?.city} ${userData?.company?.address?.state} - ${userData?.company?.address?.postalCode} `}</h3>
            </div>
            <h2>Card Details</h2>
            <div className="bankData">
                <h3>Card Number : {`${userData?.bank?.cardNumber} `}</h3>
                <h3>Card type : {`${userData?.bank?.cardType} `}</h3>
                <h3>Currency : {`${userData?.bank?.currency} `}</h3>
                <h3>Card Expiry Date : {`${userData?.bank?.cardExpire} `}</h3>
                <h3>iban : {`${userData?.bank?.iban} `}</h3>
            </div>
        </div>
    )
}

export default Profile