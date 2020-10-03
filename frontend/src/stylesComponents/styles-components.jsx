import styled from 'styled-components';
/**From button theme */
export const BoxTheme = styled('div')`
    position: absolute;
    right: -228px;
    background-color: ${props => props.bg};
    padding: 2rem 4.2ch;
    transition: right,background-color linear 200ms, linear 200ms;
    top: 250px;
    &::after{
        content: "<";
        color:#fff;
        font-size: 2.8rem;
        color:#fff;
      
        position: absolute;
        height: 50px;
        width: 30px;
        left: 5px;
        top: 32.5px;
        z-index: 1;
    }
    &:hover {
        right:-20px;
        background-color: hsl(180, 3%, 94%, 0.8);
    }
`;
export const ButtonTheme = styled('button')`
    font-weight: bold; 
    border-radius: 3px;   
    padding: 1rem 3rem;
    border:none;
    outline: none;
`;
/**From login **/
export const Spinner = styled('img')`
    animation: Rotate linear forwards 2s infinite;
    width: 300px;
    position: absolute;
    @keyframes  Rotate{
        to {
            transfrom: rotate(0deg)
        };
        from {
            transform: rotate(360deg);
        };
    };
`;

export const Msg = styled('p')`
    margin-top: 15px;
    width: ${props => props.width || '200px'};
    padding: 10px 15px;
    color:#Fff;
    background-color: ${props => props.type === '0' ? '#eb0f3aff' : '#48CF76'} ;
    text-align:center;
    animation: FadeIn forwards linear 250ms;
    font-size: 1rem;
    font-weight: 600;
    @keyframes  FadeIn{
        to {
            
                opacity: 1;
        };
        from {
                opacity: 0.2;
        };
    }
`;
/**IMAGES STYLEDCOMPONENTS */

export const BGImage = styled('img')`
    max-width: 100%;
    max-height: 100%;
    background-origin: content-box;
    object-fit: contain;
    background-size: cover;
`;

export const LogoutIcon = styled('img')`
    width: 18px;
    filter: invert(100%);
`;
/**Register 
 * @Register
 * **/


export const MsgRegister = styled('span')`
    background-color: ${props => props.error || '#48CF76'};
    padding: 8px 20px;
    font-family: 'Courier New', Courier, monospace;
    color:#fff;

`
/**Footer login and register */


export const FooterS = styled("footer")`
  width: 100%;
  color: #fff;
  height: 70px;
  text-align: center;
  font-weight: bold;
  line-height: 65px;
`;