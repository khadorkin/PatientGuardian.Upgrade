
export let authState = [{
    forgetPasswordState: { sendResetPasswordLinkSuccess: false, sendResetPasswordLinkError: false, emailId: "" },
    loginState: {
        error: { message: "", code: "" },
        isFailed: false,
        userData: {accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2RDNFNDZFOTEwNzNDNUQ0QkMyQzk5ODNCRTlGRjQ0OENGNjQwRDQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJCdFBrYnBFSFBGMUx3c21ZTy1uX1JJejJRTlEifQ.eyJuYmYiOjE1NTc3NDg1NDAsImV4cCI6MTU2MDM0MDU0MCwiaXNzIjoiaHR0cHM6Ly9jaHFhLW9hdXRoLWFwaS5jb3Jlb2Zsb3dzYW5kYm94LmNvbSIsImF1ZCI6WyJodHRwczovL2NocWEtb2F1dGgtYXBpLmNvcmVvZmxvd3NhbmRib3guY29tL3Jlc291cmNlcyIsImFwaTEiXSwiY2xpZW50X2lkIjoicm9jbGllbnQiLCJzdWIiOiJKb2huLldpbGxpYW1AbWFpbGluYXRvci5jb20iLCJhdXRoX3RpbWUiOjE1NTc3NDg1NDAsImlkcCI6ImxvY2FsIiwidXNlcm5hbWUiOiJKb2huLldpbGxpYW1AbWFpbGluYXRvci5jb20iLCJlbWFpbCI6IkpvaG4uV2lsbGlhbUBtYWlsaW5hdG9yLmNvbSIsInVzZXJpZCI6IjI4IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIklzRXVsYVVwZGF0ZWQiOiJUcnVlIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImFwaTEiXSwiYW1yIjpbInBhc3N3b3JkIl19.iWYFrkvjJD8DhHjSQO5H4j6gQ20YJdehf2hqeaj553nHv4gX_8Tw5_tv1SW9a8CU0_xWc996rOJGnyS9vYRZ8l4keZ1oPSTMu95F-jNQ-xODfvdy_PSsK-UgJKeP70rrc59ns-udZLy0x2qkqiy0h70cHckxyg7nM8HadSrulpe1OiokVo-C55JgN2ni6kJFB7BbSMnqSJcmihQnFZHE8s4ys5Yoi1AWBvrKrzAfa5QN4kbuVV0P5awmgqKLGbrV6jNOTixzLM2vKOABu9Fj38-9p3STjJCNQ5HfaxUWHDC3TLNnpYlbZ2gr3DjJjW_VB81KvXbjKb-2q1FWWPwiJg"},
        logoutState: {
            error: { message: "", code: "" },
            loading: false,
            userData: {}
        },
        navigateToLoginReducer: { screen: "LOGIN_SCREEN" },
        resetPasswordState: {
            emailId: "",
            getEmailIdError: false,
            getEmailIdSuccess: false,
            patientId: null,
            resetPasswordError: false,
            resetPasswordLinkStatus: "",
            resetPasswordStatus: false,
            resetPasswordSuccess: false,
            token: "",
            userId: null
        },
        userAgreementState: {
            emailId: "John.William@mailinator.com",
            eulaContent: "<!DOCTYPE html><html lang='en'><head><meta charset",
            getEulaContentStatus: 400,
            isEulaUpdated: false
        },
        userState: {
            authData: { access_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2RDNFNDZFOTEwNzNDNU…xUWHDC3TLNnpYlbZ2gr3DjJjW_VB81KvXbjKb-2q1FWWPwiJg", expires_in: 2592000, token_type: "Bearer" },
            autoLogoutTime: 1800000,
            careTeamId: 3,
            emailId: "john.william@mailinator.com",
            getPatientImageStatus: 0,
            impersinated: false,
            individualList: [],
            isUserMapped: true,
            lastViewedUserId: 1083,
            lastViewedUserType: "I",
            onBoardRelationShip: null,
            onBoardUserId: 0,
            patientId: 0,
            patientImage: {},
            patientName: {},
            relationshipName: "CareTeam",
            roles: {
                "Assign Service Providers to open_service_request": { Update: true, Read: true },
                "Async_Messages": { Create: true, Update: true, Read: true },
                "Bulk_invitation": { Create: true, Update: true, Read: true },
                "CareTeam_Settings": { Create: true, Read: true, Update: true, Delete: true },
                "Clinical Conditions": { Create: true, Update: true, Read: true, Delete: true },
                "Dashboard": { Create: true, Update: true, Read: true },
                "Geo_Map": { Read: true },
                "Languages Spoken": { Create: true, Update: true, Read: true, Delete: true },
                "Manage_Connections": { Create: true, Update: true, Read: true, Delete: true },
                "Notifications": { Read: true },
                "Payment": { Read: true },
                "Payment_Processing": { Create: true, Update: true, Read: true, Delete: true },
                "Profile": { Create: true, Update: true, Read: true, Delete: true },
                "Search": { Create: true, Update: true, Read: true, Delete: true },
                "Service_Provider_Standby": { Read: true },
                "Service_Providers(Hired/Invited)": { Create: true, Update: true, Read: true, Delete: true },
                "Service_Request": { Create: true, Update: true, Read: true, Delete: true },
                "Telehealth": { Create: true, Update: true, Read: true },
                "Users": { Create: true, Update: true, Read: true, Delete: true },
                "Visit_History": { Create: true, Update: true, Read: true, Delete: true },
                "Visit_Processing": { Create: true, Update: true, Read: true, Delete: true }
            },
            selectedPatientInfo: {},
            userEmail: "john.william@mailinator.com",
            userId: 28,
            userInfo: {
                careTeamId: 3,
                coreoHomeUserId: 28,
                email: "john.william@mailinator.com",
                emailId: "john.william@mailinator.com",
                isUserMapped: true,
                lastViewedUserId: 1083,
                lastViewedUserType: "I",
                onBoardRelationShip: null,
                onBoardUserId: 0,
                patientId: 0,
                relationshipName: "CareTeam",
                userId: 28,
                userType: "CT"
            },
            userType: "CT"
        }
    }
},
{
    forgetPasswordState: { sendResetPasswordLinkSuccess: false, sendResetPasswordLinkError: true, emailId: "" },
    loginState: {
        error: { message: "", code: "" },
        isFailed: true,
        userData: {accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2RDNFNDZFOTEwNzNDNUQ0QkMyQzk5ODNCRTlGRjQ0OENGNjQwRDQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJCdFBrYnBFSFBGMUx3c21ZTy1uX1JJejJRTlEifQ.eyJuYmYiOjE1NTc3NDg1NDAsImV4cCI6MTU2MDM0MDU0MCwiaXNzIjoiaHR0cHM6Ly9jaHFhLW9hdXRoLWFwaS5jb3Jlb2Zsb3dzYW5kYm94LmNvbSIsImF1ZCI6WyJodHRwczovL2NocWEtb2F1dGgtYXBpLmNvcmVvZmxvd3NhbmRib3guY29tL3Jlc291cmNlcyIsImFwaTEiXSwiY2xpZW50X2lkIjoicm9jbGllbnQiLCJzdWIiOiJKb2huLldpbGxpYW1AbWFpbGluYXRvci5jb20iLCJhdXRoX3RpbWUiOjE1NTc3NDg1NDAsImlkcCI6ImxvY2FsIiwidXNlcm5hbWUiOiJKb2huLldpbGxpYW1AbWFpbGluYXRvci5jb20iLCJlbWFpbCI6IkpvaG4uV2lsbGlhbUBtYWlsaW5hdG9yLmNvbSIsInVzZXJpZCI6IjI4IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIklzRXVsYVVwZGF0ZWQiOiJUcnVlIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImFwaTEiXSwiYW1yIjpbInBhc3N3b3JkIl19.iWYFrkvjJD8DhHjSQO5H4j6gQ20YJdehf2hqeaj553nHv4gX_8Tw5_tv1SW9a8CU0_xWc996rOJGnyS9vYRZ8l4keZ1oPSTMu95F-jNQ-xODfvdy_PSsK-UgJKeP70rrc59ns-udZLy0x2qkqiy0h70cHckxyg7nM8HadSrulpe1OiokVo-C55JgN2ni6kJFB7BbSMnqSJcmihQnFZHE8s4ys5Yoi1AWBvrKrzAfa5QN4kbuVV0P5awmgqKLGbrV6jNOTixzLM2vKOABu9Fj38-9p3STjJCNQ5HfaxUWHDC3TLNnpYlbZ2gr3DjJjW_VB81KvXbjKb-2q1FWWPwiJg"},
        logoutState: {
            error: { message: "", code: "" },
            loading: false,
            userData: {}
        },
        navigateToLoginReducer: { screen: "LOGIN_SCREEN" },
        resetPasswordState: {
            emailId: "",
            getEmailIdError: false,
            getEmailIdSuccess: false,
            patientId: null,
            resetPasswordError: false,
            resetPasswordLinkStatus: "",
            resetPasswordStatus: false,
            resetPasswordSuccess: false,
            token: "",
            userId: null
        },
        userAgreementState: {
            emailId: "John.William@mailinator.com",
            eulaContent: "<!DOCTYPE html><html lang='en'><head><meta charset",
            getEulaContentStatus: 400,
            isEulaUpdated: false
        },
        userState: {
            authData: { access_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2RDNFNDZFOTEwNzNDNU…xUWHDC3TLNnpYlbZ2gr3DjJjW_VB81KvXbjKb-2q1FWWPwiJg", expires_in: 2592000, token_type: "Bearer" },
            autoLogoutTime: 1800000,
            careTeamId: 3,
            emailId: "john.william@mailinator.com",
            getPatientImageStatus: 0,
            impersinated: false,
            individualList: [{
                coreoHomeUserId: '123',
                firstName: 'abc',
                lastName: 'cba',
                image: 'sampleBase64Image'
            }],
            isUserMapped: true,
            lastViewedUserId: 1083,
            lastViewedUserType: "I",
            onBoardRelationShip: null,
            onBoardUserId: 0,
            patientId: 0,
            patientImage: {},
            patientName: {},
            relationshipName: "CareTeam",
            roles: {
                "Assign Service Providers to open_service_request": { Update: true, Read: true },
                "Async_Messages": { Create: true, Update: true, Read: true },
                "Bulk_invitation": { Create: true, Update: true, Read: true },
                "CareTeam_Settings": { Create: true, Read: true, Update: true, Delete: true },
                "Clinical Conditions": { Create: true, Update: true, Read: true, Delete: true },
                "Dashboard": { Create: true, Update: true, Read: true },
                "Geo_Map": { Read: true },
                "Languages Spoken": { Create: true, Update: true, Read: true, Delete: true },
                "Manage_Connections": { Create: true, Update: true, Read: true, Delete: true },
                "Notifications": { Read: true },
                "Payment": { Read: true },
                "Payment_Processing": { Create: true, Update: true, Read: true, Delete: true },
                "Profile": { Create: true, Update: true, Read: true, Delete: true },
                "Search": { Create: true, Update: true, Read: true, Delete: true },
                "Service_Provider_Standby": { Read: true },
                "Service_Providers(Hired/Invited)": { Create: true, Update: true, Read: true, Delete: true },
                "Service_Request": { Create: true, Update: true, Read: true, Delete: true },
                "Telehealth": { Create: true, Update: true, Read: true },
                "Users": { Create: true, Update: true, Read: true, Delete: true },
                "Visit_History": { Create: true, Update: true, Read: true, Delete: true },
                "Visit_Processing": { Create: true, Update: true, Read: true, Delete: true }
            },
            selectedPatientInfo: {},
            userEmail: "john.william@mailinator.com",
            userId: 28,
            userInfo: {
                careTeamId: 3,
                coreoHomeUserId: 28,
                email: "john.william@mailinator.com",
                emailId: "john.william@mailinator.com",
                isUserMapped: true,
                lastViewedUserId: 1083,
                lastViewedUserType: "I",
                onBoardRelationShip: null,
                onBoardUserId: 0,
                patientId: 0,
                relationshipName: "CareTeam",
                userId: 28,
                userType: "CT"
            },
            userType: "CT"
        }
    }
},

{
    forgetPasswordState: { sendResetPasswordLinkSuccess: false, sendResetPasswordLinkError: true, emailId: "" },
    loginState: {
        error: { message: "", code: "" },
        isFailed: true,
        userData: {accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2RDNFNDZFOTEwNzNDNUQ0QkMyQzk5ODNCRTlGRjQ0OENGNjQwRDQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJCdFBrYnBFSFBGMUx3c21ZTy1uX1JJejJRTlEifQ.eyJuYmYiOjE1NTc3NDg1NDAsImV4cCI6MTU2MDM0MDU0MCwiaXNzIjoiaHR0cHM6Ly9jaHFhLW9hdXRoLWFwaS5jb3Jlb2Zsb3dzYW5kYm94LmNvbSIsImF1ZCI6WyJodHRwczovL2NocWEtb2F1dGgtYXBpLmNvcmVvZmxvd3NhbmRib3guY29tL3Jlc291cmNlcyIsImFwaTEiXSwiY2xpZW50X2lkIjoicm9jbGllbnQiLCJzdWIiOiJKb2huLldpbGxpYW1AbWFpbGluYXRvci5jb20iLCJhdXRoX3RpbWUiOjE1NTc3NDg1NDAsImlkcCI6ImxvY2FsIiwidXNlcm5hbWUiOiJKb2huLldpbGxpYW1AbWFpbGluYXRvci5jb20iLCJlbWFpbCI6IkpvaG4uV2lsbGlhbUBtYWlsaW5hdG9yLmNvbSIsInVzZXJpZCI6IjI4IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIklzRXVsYVVwZGF0ZWQiOiJUcnVlIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImFwaTEiXSwiYW1yIjpbInBhc3N3b3JkIl19.iWYFrkvjJD8DhHjSQO5H4j6gQ20YJdehf2hqeaj553nHv4gX_8Tw5_tv1SW9a8CU0_xWc996rOJGnyS9vYRZ8l4keZ1oPSTMu95F-jNQ-xODfvdy_PSsK-UgJKeP70rrc59ns-udZLy0x2qkqiy0h70cHckxyg7nM8HadSrulpe1OiokVo-C55JgN2ni6kJFB7BbSMnqSJcmihQnFZHE8s4ys5Yoi1AWBvrKrzAfa5QN4kbuVV0P5awmgqKLGbrV6jNOTixzLM2vKOABu9Fj38-9p3STjJCNQ5HfaxUWHDC3TLNnpYlbZ2gr3DjJjW_VB81KvXbjKb-2q1FWWPwiJg"},
        logoutState: {
            error: { message: "", code: "" },
            loading: false,
            userData: {}
        },
        navigateToLoginReducer: { screen: "LOGIN_SCREEN" },
        resetPasswordState: {
            emailId: "",
            getEmailIdError: false,
            getEmailIdSuccess: false,
            patientId: null,
            resetPasswordError: false,
            resetPasswordLinkStatus: "",
            resetPasswordStatus: false,
            resetPasswordSuccess: false,
            token: "",
            userId: null
        },
        userAgreementState: {
            emailId: "John.William@mailinator.com",
            eulaContent: "<!DOCTYPE html><html lang='en'><head><meta charset",
            getEulaContentStatus: 400,
            isEulaUpdated: false
        },
        userState: {
            authData: { access_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2RDNFNDZFOTEwNzNDNU…xUWHDC3TLNnpYlbZ2gr3DjJjW_VB81KvXbjKb-2q1FWWPwiJg", expires_in: 2592000, token_type: "Bearer" },
            autoLogoutTime: 1800000,
            careTeamId: 3,
            emailId: "john.william@mailinator.com",
            getPatientImageStatus: 0,
            impersinated: false,
            individualList: [{
                coreoHomeUserId: '123',
                firstName: 'abc',
                lastName: 'cba',
                image: 'sampleBase64Image'
            }],
            isUserMapped: true,
            lastViewedUserId: 1083,
            lastViewedUserType: "I",
            onBoardRelationShip: null,
            onBoardUserId: 0,
            patientId: 0,
            patientImage: {},
            patientName: {},
            relationshipName: "CareTeam",
            roles: {
                "Assign Service Providers to open_service_request": { Update: true, Read: true },
                "Async_Messages": { Create: true, Update: true, Read: true },
                "Bulk_invitation": { Create: true, Update: true, Read: true },
                "CareTeam_Settings": { Create: true, Read: true, Update: true, Delete: true },
                "Clinical Conditions": { Create: true, Update: true, Read: true, Delete: true },
                "Dashboard": { Create: true, Update: true, Read: true },
                "Geo_Map": { Read: true },
                "Languages Spoken": { Create: true, Update: true, Read: true, Delete: true },
                "Manage_Connections": { Create: true, Update: true, Read: true, Delete: true },
                "Notifications": { Read: true },
                "Payment": { Read: true },
                "Payment_Processing": { Create: true, Update: true, Read: true, Delete: true },
                "Profile": { Create: true, Update: true, Read: true, Delete: true },
                "Search": { Create: true, Update: true, Read: true, Delete: true },
                "Service_Provider_Standby": { Read: true },
                "Service_Providers(Hired/Invited)": { Create: true, Update: true, Read: true, Delete: true },
                "Service_Request": { Create: true, Update: true, Read: true, Delete: true },
                "Telehealth": { Create: true, Update: true, Read: true },
                "Users": { Create: true, Update: true, Read: true, Delete: true },
                "Visit_History": { Create: true, Update: true, Read: true, Delete: true },
                "Visit_Processing": { Create: true, Update: true, Read: true, Delete: true }
            },
            selectedPatientInfo: {},
            userEmail: "john.william@mailinator.com",
            userId: 28,
            userInfo: {
                careTeamId: 3,
                coreoHomeUserId: 28,
                email: "john.william@mailinator.com",
                emailId: "john.william@mailinator.com",
                isUserMapped: true,
                lastViewedUserId: 1083,
                lastViewedUserType: "G",
                onBoardRelationShip: null,
                onBoardUserId: 0,
                patientId: 0,
                relationshipName: "CareTeam",
                userId: 28,
                userType: "G"
            },
            userType: "G"
        }
    }
},


{
    forgetPasswordState: { sendResetPasswordLinkSuccess: false, sendResetPasswordLinkError: true, emailId: "" },
    loginState: {
        error: { message: "", code: "" },
        isFailed: true,
        userData: {accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2RDNFNDZFOTEwNzNDNUQ0QkMyQzk5ODNCRTlGRjQ0OENGNjQwRDQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJCdFBrYnBFSFBGMUx3c21ZTy1uX1JJejJRTlEifQ.eyJuYmYiOjE1NTc3NDg1NDAsImV4cCI6MTU2MDM0MDU0MCwiaXNzIjoiaHR0cHM6Ly9jaHFhLW9hdXRoLWFwaS5jb3Jlb2Zsb3dzYW5kYm94LmNvbSIsImF1ZCI6WyJodHRwczovL2NocWEtb2F1dGgtYXBpLmNvcmVvZmxvd3NhbmRib3guY29tL3Jlc291cmNlcyIsImFwaTEiXSwiY2xpZW50X2lkIjoicm9jbGllbnQiLCJzdWIiOiJKb2huLldpbGxpYW1AbWFpbGluYXRvci5jb20iLCJhdXRoX3RpbWUiOjE1NTc3NDg1NDAsImlkcCI6ImxvY2FsIiwidXNlcm5hbWUiOiJKb2huLldpbGxpYW1AbWFpbGluYXRvci5jb20iLCJlbWFpbCI6IkpvaG4uV2lsbGlhbUBtYWlsaW5hdG9yLmNvbSIsInVzZXJpZCI6IjI4IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIklzRXVsYVVwZGF0ZWQiOiJUcnVlIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImFwaTEiXSwiYW1yIjpbInBhc3N3b3JkIl19.iWYFrkvjJD8DhHjSQO5H4j6gQ20YJdehf2hqeaj553nHv4gX_8Tw5_tv1SW9a8CU0_xWc996rOJGnyS9vYRZ8l4keZ1oPSTMu95F-jNQ-xODfvdy_PSsK-UgJKeP70rrc59ns-udZLy0x2qkqiy0h70cHckxyg7nM8HadSrulpe1OiokVo-C55JgN2ni6kJFB7BbSMnqSJcmihQnFZHE8s4ys5Yoi1AWBvrKrzAfa5QN4kbuVV0P5awmgqKLGbrV6jNOTixzLM2vKOABu9Fj38-9p3STjJCNQ5HfaxUWHDC3TLNnpYlbZ2gr3DjJjW_VB81KvXbjKb-2q1FWWPwiJg"},
        logoutState: {
            error: { message: "", code: "" },
            loading: false,
            userData: {}
        },
        navigateToLoginReducer: { screen: "LOGIN_SCREEN" },
        resetPasswordState: {
            emailId: "",
            getEmailIdError: false,
            getEmailIdSuccess: false,
            patientId: null,
            resetPasswordError: false,
            resetPasswordLinkStatus: "",
            resetPasswordStatus: false,
            resetPasswordSuccess: false,
            token: "",
            userId: null
        },
        userAgreementState: {
            emailId: "John.William@mailinator.com",
            eulaContent: "<!DOCTYPE html><html lang='en'><head><meta charset",
            getEulaContentStatus: 400,
            isEulaUpdated: false
        },
        userState: {
            authData: { access_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2RDNFNDZFOTEwNzNDNU…xUWHDC3TLNnpYlbZ2gr3DjJjW_VB81KvXbjKb-2q1FWWPwiJg", expires_in: 2592000, token_type: "Bearer" },
            autoLogoutTime: 1800000,
            careTeamId: 3,
            emailId: "john.william@mailinator.com",
            getPatientImageStatus: 0,
            impersinated: false,
            individualList: [{
                coreoHomeUserId: '123',
                firstName: 'abc',
                lastName: 'cba',
                image: 'sampleBase64Image'
            }],
            isUserMapped: true,
            lastViewedUserId: 1083,
            lastViewedUserType: "IG",
            onBoardRelationShip: null,
            onBoardUserId: 0,
            patientId: 0,
            patientImage: {},
            patientName: {},
            relationshipName: "CareTeam",
            roles: {
                "Assign Service Providers to open_service_request": { Update: true, Read: true },
                "Async_Messages": { Create: true, Update: true, Read: true },
                "Bulk_invitation": { Create: true, Update: true, Read: true },
                "CareTeam_Settings": { Create: true, Read: true, Update: true, Delete: true },
                "Clinical Conditions": { Create: true, Update: true, Read: true, Delete: true },
                "Dashboard": { Create: true, Update: true, Read: true },
                "Geo_Map": { Read: true },
                "Languages Spoken": { Create: true, Update: true, Read: true, Delete: true },
                "Manage_Connections": { Create: true, Update: true, Read: true, Delete: true },
                "Notifications": { Read: true },
                "Payment": { Read: true },
                "Payment_Processing": { Create: true, Update: true, Read: true, Delete: true },
                "Profile": { Create: true, Update: true, Read: true, Delete: true },
                "Search": { Create: true, Update: true, Read: true, Delete: true },
                "Service_Provider_Standby": { Read: true },
                "Service_Providers(Hired/Invited)": { Create: true, Update: true, Read: true, Delete: true },
                "Service_Request": { Create: true, Update: true, Read: true, Delete: true },
                "Telehealth": { Create: true, Update: true, Read: true },
                "Users": { Create: true, Update: true, Read: true, Delete: true },
                "Visit_History": { Create: true, Update: true, Read: true, Delete: true },
                "Visit_Processing": { Create: true, Update: true, Read: true, Delete: true }
            },
            selectedPatientInfo: {},
            userEmail: "john.william@mailinator.com",
            userId: 28,
            userInfo: {
                careTeamId: 3,
                coreoHomeUserId: 28,
                email: "john.william@mailinator.com",
                emailId: "john.william@mailinator.com",
                isUserMapped: true,
                lastViewedUserId: 1083,
                lastViewedUserType: "IG",
                onBoardRelationShip: null,
                onBoardUserId: 0,
                patientId: 0,
                relationshipName: "CareTeam",
                userId: 28,
                userType: "IG"
            },
            userType: "IG"
        }
    }
}
]


export let onSelectIndividual = {
    coreoHomeUserId: 355,
    firstName: "lori",
    image: "data:image/jpeg;base64,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",
    imageArray: null,
    lastName: "Whitfoot",
    name: "Spouse",
    patientId: 1022,
    userType: "I"
}