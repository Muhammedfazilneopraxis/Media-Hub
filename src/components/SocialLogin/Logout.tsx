import { GoogleLogout } from 'react-google-login';
import { logout } from '../../Firebase';

function GoogleLogoutButton() {
    return (
        <GoogleLogout
            clientId="eyJhbGciOiJSUzI1NiIsImtpZCI6ImE5NmFkY2U5OTk5YmJmNWNkMzBmMjlmNDljZDM3ZjRjNWU2NDI3NDAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTXVoYW1tZWQgZmF6aWwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MzhwdkpySXJJZTl4cUZEaVVwSkxoVW81eHhZNWh4dndOUTVpaFg9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWVkaWEtaHViZmF6aWwiLCJhdWQiOiJtZWRpYS1odWJmYXppbCIsImF1dGhfdGltZSI6MTY2OTY0MTM3OSwidXNlcl9pZCI6InJKMGU1MXZsYzVYa1Q5MmJMTUhEQWFKazJjNTIiLCJzdWIiOiJySjBlNTF2bGM1WGtUOTJiTE1IREFhSmsyYzUyIiwiaWF0IjoxNjY5NzA2ODU5LCJleHAiOjE2Njk3MTA0NTksImVtYWlsIjoibXVoYW1tZWRmYXppbDEyMTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDM2MDE5Nzg1MTU2ODQyMTcwNTgiXSwiZW1haWwiOlsibXVoYW1tZWRmYXppbDEyMTBAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.B_bgYBgiqiRB2w4LIemyP2jCgVlQ4OJzewtuq8XUbo3DT8-SlX3mbYcW3Cm-WOTZxlg80VcPa3CVjKL-5x2a70MJTvG3TnxHMTfYy_AWTdYHHXoJBZCgfdvzk1S-OLWxusJRdHy_eDFVnZlLvWFsDLRS-yjc-0x38KrgkbVwSSNehqUxDj0zZO3-2J8DAns0G4Jk9Bt5DaldqZcQsjuEj2Sm1u1m5ljjMMhF-eiXvOpnSuNmItmpJO95MV1OD_NAZBfzqWqwfJ58AyDeOOMt71FjLbsY2GQsGAqvtSe00voE3WhXuJ3XecKDekrnAR5pXZH1Ke3HFTjuUXCekHy9KQ"
            buttonText="Logout"
            onLogoutSuccess={logout}
        >
        </GoogleLogout>
    );
}

export default GoogleLogoutButton;

