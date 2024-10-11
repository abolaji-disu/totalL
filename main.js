function runScript() {
    console.log("Script is running");
    let currentPath = window.location.pathname;
    console.log('Current Path:', currentPath);


    const sideBarHeader = document.querySelector(".sidebar-header");
    if (sideBarHeader) {
        sideBarHeader.innerHTML = `Get a 100% Free Consult for Up to $3,822/Month
        in Disability Benefits`;
    }



    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const sideBarSub = document.querySelector(".sidebar-sub");

    if (sideBarSub) {
        sideBarSub.innerHTML = `<span>Answer a few questions to get started</span>`;
    }

    const sideBar2 = document.querySelector('.sideBar2');
    const sidebarIcons = document.querySelector('.sidebar-icons');
    const submitButton = document.querySelector('.btn-sem-form-submit');
    const mobileFooterIcons = document.querySelector('.mobile-footer-icons');



    function handleScreenChange() {
        // Media query handling
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        if (mediaQuery.matches) {
            // Handle small screen behavior
            console.log("Screen is small");

            // Remove sideBarSub2 if it exists
            let existingSideBarSub2 = document.querySelector('.sideBarSub2');
            if (existingSideBarSub2 && existingSideBarSub2.parentNode) {
                existingSideBarSub2.parentNode.removeChild(existingSideBarSub2);
            }

            if (mobileFooterIcons && mobileFooterIcons.parentNode) {
                mobileFooterIcons.parentNode.removeChild(mobileFooterIcons);

            }



            const button = document.querySelector('button[data-label-first="Next Step"]');


            // Create and insert sideBarSub2 if it doesn't exist
            let sideBarSub2 = document.createElement('div');
            sideBarSub2.classList.add('sideBarSub2');
            sideBarSub2.innerHTML = `
            <p>Join over 1M+ others who chose us to connect with a lawyer — for free.</p>
        `;
            if (button) {
                button.parentNode.insertBefore(sideBarSub2, button.nextElementSibling);
            }

            let newSideBarSub = document.querySelector(".sideBarSub2");
            if (newSideBarSub){
                // alert("I am here")
                newSideBarSub.parentNode.insertBefore(mobileFooterIcons, newSideBarSub.nextElementSibling);
            }


        } else {
            // Handle large screen behavior - reset to original positions
            console.log("Screen is large");


            // Remove sideBarSub2 if it exists
            let existingSideBarSub2 = document.querySelector('.sideBarSub2');
            if (existingSideBarSub2 && existingSideBarSub2.parentNode) {
                existingSideBarSub2.parentNode.removeChild(existingSideBarSub2);
                mobileFooterIcons.parentNode.removeChild(mobileFooterIcons);
            }

            // if (mobileFooterIcons){
            //       mobileFooterIcons.parentNode.removeChild(mobileFooterIcons);
            // }


            let sideBarSub2 = document.createElement('div');
            sideBarSub2.classList.add('sideBarSub2');
            sideBarSub2.innerHTML = `
                <p>Join over 1M+ others who chose us to connect with a lawyer — for free.</p>
            `;
            if (sideBarSub) {
                sideBarSub.parentNode.insertBefore(sideBarSub2, sideBarSub.nextElementSibling);
            }



        }
    }

    handleScreenChange(); // Run on page load
    mediaQuery.addEventListener('change', handleScreenChange); // Run on screen change



    // General styles
    const generalStyle = document.createElement('style');
    generalStyle.innerHTML = `
        #panel-sidebar {
            padding: 40px 24px !important;
            width: 390px !important; 
            border-radius: 5px !important;
        }

        .sidebar-header {
            min-width: 300px !important;
        }

        .sideBar2 p {
            margin-bottom: 0 !important;
        }

        .sidebar-header::after {
            content: "";
            display: block;
            width: 68px;
            height: 4px;
            background-color: #2376FF;
            margin-top: 12px;
            border-radius: 3px;
        }

        #panel-sidebar p {
            margin-bottom: 40px !important;
        }

        #nolopath .panel-nolopath .form-select {
            border: 1px solid #006FBB !important;
            border-radius: 6px !important;
            padding: 12px 16px !important;
        }

        #nolopath .panel-nolopath label + .input-box {
            margin-top: 16px;
        }

        

        #nolopath {
            border-radius: 5px !important;
        }

        #nolopath .panel-nolopath .form-questions {
            width: 100% !important;
            padding: 0 !important;
        }

        #panel-sidebar .sidebar-icons {
            position: relative !important;
            bottom: 40px;
        }

        #nolopath .panel-nolopath .form-actions {
            width: 100% !important;
            height: 48px !important;
            padding: 0 0 40px 0 !important;
            margin: 0 0 60px 0 !important;
            border-radius: 5px;
        }

        #nolopath .panel-nolopath .form-actions .form-action-submit {
            width: 100%;
            height: 48px !important;
            border: none !important;
            font-size: 20px !important;
            font-weight: 700;
            padding: 10px !important;
        }
          .page-nolosem-ssdi-api4 #form-item-q1067 .btn-group .visible-btn-group {
                display: flex !important;
                width: 100% !important;
                margin-right: 0 !important;
            }

            .page-nolosem-ssdi-api4 #form-item-q1067 button {
                text-align: left !important;
                width: 100% !important;
                height: 45px !important;
            }

            #nolopath .panel-nolopath .btn-group-justified {
                display: flex;
                column-gap: 24px;
            }

            #nolopath-form {
            padding: 40px !important;
            border-radius: 5px !important;
        }
        
          @media (max-width: 809px) {
              .page-nolosem-ssdi-api4 #nolopath .panel-nolopath .form-step-1 
              .form-item#form-item-q1067 .btn-group.btn-group-justified {
                  display:flex;
            }


  }
   

        @media (max-width: 809px) {
          #panel-sidebar {
            padding: 0  !important;
            width: 100% !important; 
            border-radius: 5px !important;
        }


        #nolopath .panel-nolopath {
    
           box-shadow: none;
    
        }

        #nolopath{
        justify-content: flex-start !important;
        min-height: 680px !important;
        }

        #panel-sidebar p{
            margin-bottom: 20px !important;
        }

         #panel-sidebar {
            font-size:20px !important;
        }


        .sideBarSub2{
        margin-top:20px !important;
        font-size: 18px !important;
        font-weight: 400px;
        }

        .sideBarSub2 p {
        margin-bottom: 10px !important;
        }

        #panel-sidebar .sidebar-header {
            // font-size: 20px;
            line-height: 32px;
            font-weight: 800;
            color: #2E2E2E;
            display: block;
            margin: 12px 0 16px 0 !important;
        }

           .sidebar-header::after {
            content: "";
            display: none;
        }

        .sidebar-icons{
        display: flex;
        justify-content: space-between; 
         margin-top:20px !important;
        margin-bottom:50px !important;
        position:relative;
        }

        .mobile-footer-icons{
        display: flex !important;
        justify-content: space-between;
        }

      .page-nolosem-ssdi-api4 #form-item-q1067 button {
            text-align: left !important;
            width: 100% !important;
            height: 45px !important;
        }


        #nolopath-form {
        padding: 0 !important;
        border-radius: 5px !important;
        
        }

        
       
        }

    `;
    document.head.appendChild(generalStyle);

    // Page-specific styles
    const paths = {
        "step1": '/sem/ssdi-api4/',
        "step2": '/sem/ssdi-api4/step-2',
        "step3": '/sem/ssdi-api4/step-3',
        "step4": '/sem/ssdi-api4/step-4',
        "step5": '/sem/ssdi-api4/step-5'
    };

    const pageOneStyle = document.createElement('style');
    const pageTwoStyle = document.createElement('style');
    const pageThreeStyle = document.createElement('style');
    const pageFourStyle = document.createElement('style');
    const pageFiveStyle = document.createElement('style');

    if (/^\/sem\/ssdi-api4\/$/.test(currentPath)) {
        // alert('Applying styles for step 1'); // Debugging log
        pageOneStyle.innerHTML = `
        #nolopath-form {
            padding: 40px !important;
            border-radius: 5px !important;
        }
        `;
        document.head.appendChild(pageOneStyle);
    }

    if (/^\/sem\/ssdi-api4\/step-2$/.test(currentPath)) {
        // alert('Applying styles for step 2'); // Debugging log

        pageTwoStyle.innerHTML = `

        #nolopath-form {
            padding: 40px !important;
            border-radius: 5px !important;
        }
        
        #redesign-select button, .page-nolosem-ssdi-api4 #form-item-q1067 button, .page-nolosem-ssdi-api4 #form-item-q1068 button, .page-nolosem-ssdi-api4 #form-item-q1069 button, .page-nolosem-ssdi-api4 #form-item-q1070 button, .page-nolosem-ssdi-api4 #form-item-q1071 button {
    width: 100% !important;
    height: initial !important;
    padding: 12px 22px 12px 46px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    color: #2E2E2E !important;
    background: #FFFFFF !important;
    border: 1.5px solid #E1E1E1 !important;
    border-radius: 6px !important;
    min-height: unset !important;
    margin: 0 !important;
    text-align:left;
}

#redesign-select .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1067 .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1068 .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1069 .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1070 .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1071 .btn-group .visible-btn-group {
    display: inline-block !important;
    width: 100% !important;
    margin-right: 0px !important;
    margin-top: 0 !important;
    position: relative !important;
    padding: 0 !important;
    text-align:left;
}

         @media (max-width: 809px) {

             #nolopath-form {
                padding: 0 !important;
            }
        }

    

`;
        document.head.appendChild(pageTwoStyle);
    }

    if (/^\/sem\/ssdi-api4\/step-3$/.test(currentPath)) {
        // alert('Applying styles for step 3'); // Debugging log
        pageThreeStyle.innerHTML = `

        #nolopath-form {
            padding: 40px !important;
            border-radius: 5px !important;
        }
        
        #redesign-select button, .page-nolosem-ssdi-api4 #form-item-q1067 button, .page-nolosem-ssdi-api4 #form-item-q1068 button, .page-nolosem-ssdi-api4 #form-item-q1069 button, .page-nolosem-ssdi-api4 #form-item-q1070 button, .page-nolosem-ssdi-api4 #form-item-q1071 button {
    width: 100% !important;
    height: initial !important;
    padding: 12px 22px 12px 46px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    color: #2E2E2E !important;
    background: #FFFFFF !important;
    border: 1.5px solid #E1E1E1 !important;
    border-radius: 6px !important;
    min-height: unset !important;
    margin: 0 !important;
    text-align:left;
}

#redesign-select .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1067 .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1068 .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1069 .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1070 .btn-group .visible-btn-group, .page-nolosem-ssdi-api4 #form-item-q1071 .btn-group .visible-btn-group {
    display: inline-block !important;
    width: 100% !important;
    margin-right: 0px !important;
    margin-top: 0 !important;
    position: relative !important;
    padding: 0 !important;
    text-align:left;
}

 @media (max-width: 809px) {

             #nolopath-form {
                padding: 0 !important;
            }
        }

        `;
        document.head.appendChild(pageThreeStyle);
    }

    if (/^\/sem\/ssdi-api4\/step-4$/.test(currentPath)) {
        // alert('Applying styles for step 4');

        // Define and append the page-specific styles for step 4
        const pageFourStyle = document.createElement('style');

        pageFourStyle.innerHTML = `
        .footNotes4 {
            font-size: 12px !important;
            color: #8f8f8f !important;
            line-height:14.1px;
           text-align: justify;
            margin: 20px 0 0 0;
        }

       #nolopath-form {
            padding: 40px 40px 100px 40px !important;
            border-radius: 5px !important;
        }
        

         @media (max-width: 809px) {

             #nolopath-form {
                padding: 0 !important;
                 min-height: 800px !important;
            }
        }

    `;
        document.head.appendChild(pageFourStyle);

        // Create and insert the footnotes div after the specified button
        let step4Notes = document.createElement('div');
        step4Notes.innerHTML = `
        <p>
            You should not send any sensitive or confidential information through this site. 
            Any information sent through this site does not create an attorney-client relationship 
            and may not be treated as privileged or confidential. The lawyer or law firm you are 
            contacting is not required to, and may choose not to, accept you as a client. The 
            Internet is not necessarily secure and emails sent through this site could be 
            intercepted or read by third parties.
        </p>`;
        step4Notes.classList.add('footNotes4');

        const lastBtn = document.querySelector('.btn-sem-form-submit.before-last-step');
        if (lastBtn) {
            lastBtn.parentNode.insertBefore(step4Notes, lastBtn.nextElementSibling);
        }
    }


    if (/^\/sem\/ssdi-api4\/step-5$/.test(currentPath)) {
        // alert('Applying styles for step 5');

        if (sideBarSub) {
            sideBarSub.innerHTML = `<span>Enter your details for a free consult</span>`;
        }


        let rm = document.querySelector('.terms-agreement-2');
        if (rm) {
            rm.style.display = 'none';
        }


        let firstName = document.querySelector('#nolopath-qfirst_name');
        let lastName = document.querySelector('#nolopath-qlast_name');


        let firstNameLabel = document.querySelector('#form-item-first_name label');
        let lastNameLabel = document.querySelector('#form-item-last_name label');
        if (firstNameLabel) {
            firstNameLabel.remove();
        }
        if (lastNameLabel) {
            lastNameLabel.remove();
        }


        const fullNameLabel = document.createElement('label');
        fullNameLabel.textContent = "What’s your full name?";
        fullNameLabel.classList.add('control-label');


        const formItemFirstName = document.querySelector('#form-item-first_name');
        if (formItemFirstName) {
            formItemFirstName.parentNode.insertBefore(fullNameLabel, formItemFirstName);
        }


        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        formItemFirstName.parentNode.insertBefore(nameContainer, formItemFirstName);
        nameContainer.appendChild(formItemFirstName);

        const formItemLastName = document.querySelector('#form-item-last_name');
        if (formItemLastName) {
            nameContainer.appendChild(formItemLastName);
        }


        if (firstName) {
            firstName.placeholder = 'First Name';
        }
        if (lastName) {
            lastName.placeholder = 'Last Name';
        }


        const button = document.querySelector('.btn-sem-form-submit.last-step');
        if (button) {
            button.textContent = 'Get Free Consult';
        }


        let phoneLabel = document.querySelector('#form-item-phone label[for="nolopath-qphone"]');
        let phoneInput = document.querySelector('#nolopath-qphone');
        if (phoneLabel) {
            phoneLabel.textContent = "What’s your telephone number?";
        }
        if (phoneInput) {
            phoneInput.removeAttribute('placeholder');
        }

        // Update email label text and remove placeholder
        let emailLabel = document.querySelector('#form-item-mail label[for="nolopath-qmail"]');
        let emailInput = document.querySelector('#nolopath-qmail');
        if (emailLabel) {
            emailLabel.textContent = "What’s your email address?";
        }
        if (emailInput) {
            emailInput.removeAttribute('placeholder');
        }

        pageFiveStyle.innerHTML = `
        #nolopath-form input, #nolopath-form textarea {
            border: 1px solid #E1E1E1 !important;
        }

        #nolopath-form .form-disclaimer {
            padding: 0 !important; 
            margin-top: 32px !important;
            margin-bottom: 0 !important;
        }

        /* Style for name container to arrange first and last name side by side */
        .name-container {
            display: flex;
            gap: 2%;
            margin-top: 10px;
            align-items:center;
        }

        #form-item-first_name,
        #form-item-last_name {
            width: 48% !important;
        }

        #nolopath .panel-nolopath .form-item + .form-item {
     margin-top: 0; 
}
#form-item-phone {
            margin-top: 32px !important;
        }


         @media (max-width: 809px) {

             #nolopath-form {
                padding: 0 !important;
            }

            .sem-ajax-form-hybrid .sem-presubmit-providers-summary p {

                text-align: center;
            }
            
        }

    `;
        document.head.appendChild(pageFiveStyle);
    }

}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runScript);
} else {
    runScript();
}
