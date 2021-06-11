import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C5603AQGRWBSAnJsepA/profile-displayphoto-shrink_200_200/0/1583778682588?e=1628121600&v=beta&t=ebJ9mcuqzJhY5asLcI2x_jMMOzHxxlcA-dwZm77H-_Y"/>
                <Dropdown pointing="top left" text="Aleyna">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut}text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}