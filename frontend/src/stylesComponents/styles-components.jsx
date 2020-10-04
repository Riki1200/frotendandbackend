import styled from 'styled-components';
/**From button theme */
export const BoxTheme = styled('div')`
    position: absolute;
    right: -120px;
    background-color: ${props => props.bg};
    padding: 10px 5px;
    transition: right,background-color linear 200ms, linear 200ms;
    top: 250px;
    &:hover {
        right:-20px;
        background-color: hsl(180, 3%, 94%, 0.6);
    }
    display:flex;
    justify-content:center;
    flex-flow:column wrap;
    align-items:center;
    gap: 20px;
`;
export const ButtonThemeOne = styled('button')`
    font-weight: bold; 
    clip-path:circle(30px);  
    padding: 2rem 5rem;

    border:none;
    outline: none;
    background-color:${props => props.bg};
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
    position:absolute;
    max-width: 120%;
   
    left:-50px;
    top: -50px;
    background-size: cover;
    object-fit: contain;
    background-size: cover;
    z-index: 0;
    pointer-events:none;
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
`;
/**Footer login and register */


export const FooterS = styled("footer")`
  width: 100%;
  color: #fff;
  height: 70px;
  text-align: center;
  font-weight: bold;
  line-height: 65px;
`;
/***
 * For portals
 *
 */

export const Modal = styled('div')`
    position: absolute;
    width: 100%;
    height:100%;
    background-color: #2D40FF;
    background-image: linear-gradient(#01031b,#4d72de);
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    & ~ .remove {
        display:none;
    }
`;
export const Children = styled('div')`
    position:relative;
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;            
    align-items:center; 
    top: 0;
    h2{
        
        margin-left:auto;
        margin-right: auto;
        text-align:center;
     
        font-size: 2rem;
        color:#fff;
        font-weight: 100;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
`;