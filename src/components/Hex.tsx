import { useState } from "react"; 

    function HexToRGB() {
        const [form, setForm] = useState({
          hexValue: '#FFFFFF',
          rgbValue: 'rgb(255, 255, 255)',
        });

        const [isError, setIsError] = useState(false);
      
        function cvrtHex2Rgb() {
          const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
          const match = form.hexValue.match(regex);
      
          if (!match) { setForm(prevState => ({...prevState, rgb: 'rgb(255, 255, 255)' }));
            setIsError(true)
            return;
          }
      
          const rgb = parseInt(match[1], 16) + ', ' + parseInt(match[2], 16) + ', ' + parseInt(match[3], 16);
      
          setForm(prevState => ({ ...prevState, rgbValue: 'rgb(' + rgb + ')' ,}));
          setIsError(false);
        }
      
        const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm(prevState => ({ ...prevState, hexValue: e.target.value }));
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                cvrtHex2Rgb();
            }
          };

        return (
          <div className="container" style={{backgroundColor: isError ? 'red' : form.rgbValue}}>
            <form className="form">
              <input
                onKeyDown={handleKeyDown}
                onInput={handleHexChange}
                value={form.hexValue}
              />
              <input
                style={{
                  backgroundColor: isError ? 'darkred' : 'white',
                  color: isError ? 'white' : 'black',
                }}
                value={isError ? 'Ошибка!' : form.rgbValue}
                readOnly
              />
            </form>
          </div>
        );
      }

export default HexToRGB;