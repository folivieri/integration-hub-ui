import React, { useEffect, useState } from 'react';

import '../App.css';
import azureLogo from '../icons/azureStorage.png';
import successFactorsLogo from '../icons/successFactors.png';
import workdayLogo from '../icons/workday.png';
import shLogo from '../icons/skyhive.png';
import sftpLogo from '../icons/sftp.png';
import pluralsightLogo from '../icons/pluralsight.png';

const PartnerLogo = (props) => {
    const [logo, setLogo] = useState("");
    useEffect(() => {
        //console.log("PROP:" + props.partner);
        switch (props.partner) {
            case 'sh':
                setLogo(shLogo) ;
                break
            case 'wd':
                setLogo(workdayLogo) ;
                break;
            case 'sf':
                setLogo(successFactorsLogo) ;
                break;
            case 'afs':
                setLogo(azureLogo) ;
                break;
            case 'sftp':
                setLogo(sftpLogo) ;
                break;
            case 'pls':
                setLogo(pluralsightLogo) ;
                break;
            default:
              return null;
          }
    }, [props.partner]); 

    return ( 
        <div>
            <img src={logo} className="Partner-logo" alt="logo" />
        </div>
    );
}

export default PartnerLogo;