import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
       <img className='checkout__ad' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQDxAVFhUVFRUXGBUXFxYVFhYVFRUWFhYWFRUYHiggGRolGxUWITEhJyoxLi4uFx8zODMsNygtLi0BCgoKDg0OGxAQGi8lICUrLS0tNS0tLS0tMjAtKy0uLy0tLS0tLSstLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAC8CWAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAEgQAAIBAwIEBAMCCQkFCQAAAAECAwAREgQhBQYTMSJBUWEHMpFxgRQjQlJic4KhsxYlMzQ1cnSxwRVDhLLwFyQ2U1TC0uHx/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAECAwQFBgf/xAA7EQABAwIDBQUHAQYHAAAAAAABAAIRAyEEEjFBUWFx8BMygZGhBRQiQrHB0ZJDUnKi4fEGIyUzNERz/9oADAMBAAIRAxEAPwDY0Gkor5ttXeRRRRQhFFFBoQkNNvXSmU0JaWkNLQhI1IKdSGgIQBSigCi9CEXooopITr0gpaKSFj+aeTRLlNpfDIblk7LIfPEn5WP0Pt3rzqSIqxVgQQbEEWII7gg9jXulUPNXL8UyNMwxeNS2YHzKguVceewsD3H7q7GB9olsU6txsO789arVRxWSz9F5po9V0gWdwENroVzy7EHEkBT6NcH0rRcN+IccCdIpI53IZiHsSdgSCpK289zv51hoj1nGZPickjYbH7TYCtRHyS8gyhdUbEsEcgZoALsjrkD37G3lXo6mHom1UTz0XKq4qtXJcLDcOpW45X5qXWXRozHIBkBe6uvmVPt6VE+I3FJIdMI4WxeZitx3CKt3A9zcD61hNNrtVo50ikRl8aYq4AvZh8rja1xY2NrbGtrzbMsskfkEg1RvcflOkIZfuEh/ZPpXNPs1lLFMqNHwXMbiNOMbQoioXUyDros/y3wSTVRL1GwHYd7+WxHpsLelXer5KQIcppLkbP2AP+o9q48rccijUGRWCA2VsTiX2VVPn3Nr2t2q81nHbyNpxFdkNjeSIFjffpIDk+xB7eYroOzySpAU7DUKo5C1M0bSaafsGtffaQDf7mFvv+2tpqtUkSNJKwVEBZifICsJxEGPVpPE4sxQSqG8QGNgwU97DG4Ha3vt0+JHMELaaTTRnJy0d7Dwri6NufM7dvrXHxuC7XEsLfm70bIIBPqnSLsrgL5brEcf4+2rnM0lwlhhGeyLcCxH5RIyJ8iSfsqtZri4++zAAb+f0HlbauvCuEySpJOi3SCxbf3AsB5/MP8A63NSOA8On1MnShUbWyYkqE2IBLDse/YXNq9E1rKbcrbALB8TjfamQNIUJsWsNlsbqPIetrA+e1+1q6Fdgw7ML3/68xW9l5R4WqGFpSkxAUTO0oRpDsfRTc7d/ParHgnIUOmcGVuqUC4qfkyxBLEHuc8rDsPc71ixmJpUqed3IcevRdTA16lF2VxlsG34+/BO+H2mkj0zGRSod8kB74lVF7eQJG31860l6e1UfN3GG0elfURorFWQWa9vEwU9t/OvJEuxVewu46c1bUqavdzVwRSGsTBzpK3DpNeYo8kmEYXxYkFkF9ze/iNM0/O8rcOk15ijzSYRhPFiQcBc73v4j9Ku9wr7vmyajvKnt2ek+C3Ip1YeDnaVuGSa8xR5pN0wnixIvGLne9/GaavO8p4adf0Y8xN08PFjbYXve996XuFfcO9k1HeT7dnpPgt0aaaxg51ZuGnXpGnURxG8ZJxDFwO/exVgfvqL/LbUto49TFpVeR5nQookYBUA38O97kVIezq52DvZdRrE+UXlI16fpK3wFLXlcPxL1jNgmiRmF7qBKWFu91G+1WHGuftTpl05bTRhpoTIytmuBzZQLXv2A71Y72Rig4NIEniFH3qnrfyXolFYLgHOOtn1EUMuh6aO1mfCYYgAnu23lVbJ8R9V1Xhi0cblGcWUSMxCta9lpD2ViS4tAEgT3hoZ26bCn7zTib+RXp9FYzk3ng6yR4Z4RE6oXBUkghDZgQdwRcfv7WqkPxM1MjN+C6EOi7/7x2C72Z8Nhcf/ALUR7LxJe5mW7Ym4i+l0e804BnXgvTqCKzPI/NX+0EfKMJJGVyAJKkMDiwJ7fKRb2rSmslai+jUNN4ghXNcHCQi9FAFLVaaKQ0tFJCaKVRQaFFNCW9F6DRSQilpKdQUIopkjhQWbsASfsAuaIpAyhl7MAR9hFxRBiet/0QlpaU02hCKKaTTqEIooooQilpBRQhLSmiihCKSlopITaCaKKaEXooFFCEtIDSA0pplASVA41xZNKgkkBILY2Fr2Cs7tv5KiMx+yrC1RtZoIpbdWNXxDABtwMwA23a9h37je3ep0jTDwaglu2NephJ0kW1Ubi3G49O0ay3CyBzntimAXdvtLKo9yPWub8dA0q6vpP4sbRbZ5M+AT0Bv39N6mroo/AcL9NSi3JNlONxv3+RdzvtTW4bEVRDGCsbFlU3IDEMLkE7/O3e/ermuoQ3M0yDe+ov5ajy2XUCH3grjr+KhIV1EY6isFKgMAWztgEv8AMzEqAPel1/EjGUjWIvIyPJgGUWWPDPxHYm7qAPO/kKJeDQskcRQhYjeMK8iFDiV8LIwI2Yjv2NdNbwyKUKJFJxBAId1axADDNWDEGwuCbG296GuoCJB1M8vlkZvPTWJ3hD/p/VRdRx6NEglsxj1GNmt8qsmSs48h2B9L1O4bqxNFHMAQJERwD3AdQwB996bPoI3UI8alVBUL+SFZShW3a2JIrrpoVjRY0FlRVVRubKosBc+wqt5p5BlF9vrH25ptzTfRV6cbBlEfTbBpmgEl1sZURnIx7hfAwv6jtY3oh44ral9IFOSkgm4PaOOTIr3C/jAuXrtUheFQ9X8ICeO5N8mxyK4lwl8Q5XbIC9vOuy6CMP1QlnLFi1zfIosZ8+2KILdvCD3F6mXUb2Pd/m36/hKH79voosvFlWOWUoxETsmItdmBUALfbcsBvSDio6LTEA4Niyq6vZgwUjIbXF+1SH0UZV0KArISXU3IYt3NJFwyJYzEFJRjkwZ3cs1wbl2JYnYdz5Uw6haWnUeVpGvPfrs0RD+t6icY48mnfB0Y/i2cMLWJBNo7nsxCsR/dNSOJcXSCSKJwbysRfayjJEDNfyLyIv7Xsa667hsU1xNGGyCg3v2Vs17Hazb3pur4XDK2csYZsQtze4CtkMd/Ccje4sdh6Ckw4f4c4OhmN+wjkdeXFBD7wRwTl1gMzQWN1iSS/lZ3dAPt/Fn61KqLLw+NpROQ3UUBbh3UFQSQGVSFYAs3cHvUmqHZbRuvz8/FTE7UtcuIwF4ZUXu0Uige7IQP3mu1OY1EGCChy8C4LCCzM63RcFZTcHEkg7jcdrffXpmMME2nTSGIBY28JkKC75GxODEkWBv53HpVPz/pl08/WjQBdRE6ydrZq6eIDybdTfzsaruXOL6bPqamSSNguOUYje/sVdWG9e5ZV94YKoFiNPt4FYWQz4doWh5y5Z0q6U6qFcWHSlOLM63aVFZQCf023qrSBNUsZLMOlqGiOPcRzt4JbedmZz74Aed6v9XpGm0LR6MB1fE73S6C7BY7i188Sewsu3e9YDTNJH1Ql1kVCQCLHKORGZbHs2Kt++kyqHHKDcG/CVqZhw6jUfuj069FbF4dPBGLYo2qiBYAlsFYSMS174WIsO+497755oJpCRkqufA2IAY3uV3F1axvfz8Vt1NYfVSddoZtMGCbyNgYwVLCOw8YI8IXH5fyT99sR02EyORHkA0eUbqwItl4ETBhe/oRttehwtdUN4aJebRboKkasOqqIp/OfqEWvtvg3c+dZ/iGniignMjdSZkcbG6hiblu3iKkXJ2tYX3uKm8/yvFqNO0hVYmjsoO/ixs3UUG4C3XceptesjxLiEqsyqwAtibC1x921rbelu21PsnOyxz9d6tpVmMpvzHW3HQ+itvh/M6GYPA8mnaMl8cAyFNxIgkIVrW3G/lsdwdhyTws6eSadglpZWsqXsse5VbHsdzWX5K5gBddLqwqxOrR5rdSudx4jcixv32t3q80nFPwTUNodVIBcho3bYHI9jfsCQfs2871ZVzSbLPRyZR91pdFynB1hJJ0SSDgCiqxe4xLtsWIUsLbjcG2wq5hiCAIvlf3JN7kk+ZJJJPmSTUWeBnYK2DQkBypRHXMEYhGD3BBAbxIb+oqXXmvbFYEtpzpc7r6LSzUlIxrJfFH+zpf78X8Ra1hrKfFH+z5P78X8Raw4H/k0/4h9VKt/tu5FeZ6fj8a8Mk0BR+o8okDeHCwZDY73v4T5VaaEfzBP/i1/wA4qbBoYv8AY0s5iQyjUKBJiMwt4vCGte25+tP0X9gz/wCLX/OKvT1TTPcEf5wnnv5LnNnb+4UaH/w/N/iR/wA0NJEP5gb/ABf+q1x0uviHBZYDIglOoDCPIZlbxG4XvbY/Q13iP8wtf/1f+q1UWluo/bqUg/oWZ0fEzHp59P3Wbpn2DxyAg/euQP7Neq/Cb+oD9dJ/pXnet4QDw+DWIO0ksT/YXJjJ+/IfeK9F+FAtoR+vk/8AbUPbTmPwji39+DzAI+w8ITwoIqAHcsryCf54m/4n+JR8ZR/3mH9Qf4jUcg/2xN/xP8Sk+M39Zh/UH+I9SA/1Rn/mPun/ANc8/wALecrc3w69nSGOVemqklwoG5sAMWPoa875O4nFp+JzS6iQIn49cjci5lFhsD6H6V6RwnWcPVsNJJpQ72GMRiDORcgWXc2uf315dwHg6avXamFwfl1LJY2tIHsp27gE9qx4FtEsxAylrC0TtOpnWynVzSy4Jk8lO5APU4lqCm4aPUkH2ZxY/fcfWq/krmCLRGddSkp6iCOyBclK5BgQxFjvV38J9eEGqjxXqCMSi/zEJkGUnvYEpt7mpnL3Mmm1pnfXwaKMhUwLKgZywfK7SfNbFe3rWzEuPaVmGmXMhgMG/wBDv9FVTuGkGDfYrf4brocJW0HUBOAkWU3cWywNhtY3bcVsq8q+C/8ASan9XF/zNXqtcX2rT7PFObJOmpk6LZhnTTBhBFApDSiuer1S8Y4vJCzqsSucI2iFyC5LsJlP91QrftVx13MLKjvGIzecxw5HEOI485CzX2N0lUe4XvVxPpI2dJHQF48sG38OYxb6imaPhUMQjWOMARKyoLscVchm7k3JKjc7/U1rbUoZRLbjXcf7wPNw2CKi18m9uuvJQn1kzyw9CWHpTIZFLROzYqIz8wlAOXU2NtveuUnE5uhPqx0sEj1DJGVYuTFmFLyZgWJTdQu1+9W8OhjTAqtumGC7nwhyCwG/a4H2W2tUT/YsJ6nhbGQOHQSSCMiS4f8AFBsQTc7gXuSe9Qz0jYDxjideYy35oLXdHgm6Pi/UmEaqwHRLnKOSM5ZKAFzAuPEe3tUOTj7rJPGyL4JUSJvFZvDAZFb9MCa49RfbwmrpdOuQe3iC4A3Py3Btb7QK4T8KhcMHjBylWY7n+lQIFcb7ECNRttt7mm2pRzyW2gfW56FxKZa6LFQJuJzASTKI+jFIUKFX6jBGCO4fKym+VlxN8RuL7Nbj7JII5FXwzSpKwJASO6dBt7+JhNCD9rWqwk4REz9QqbllYrm4jZ1tizRA4MwsNyPyR6CjV8Igl6hkjB6yokm7DJUJKjY7WJ7jft6Cm19Cwc3yHIb9gzGdSYBtqi2psPXUBMWdpNGZJFxZ4GYr+blGSF+0AgH3vXTSSY6ZGH5MCn6Rg114gPxUgA/3bi37JrnpIidOqHYmBV38iUA3FUkgiY+b03Ke3wWYg5s1AWB5Y4cdVp55Ywmd0eCLqESFjYqfa1vfvRBxWWVtDNqIoR1mLR4PLdQdOWJcbAknyIIA+tWvBOVYNPGqlFeQRdJpPF4lIs1lJIW/narEcLhAiAjFoP6Lc+Dw4bb7+Hbetjq2Ha74W7xOmxwnW2o5xNiYVQZUIuercOaynD+ZtbMdIFTSr+FxzMt+qcGh7lt9wfzR9a4w88TyxRGKBerJBJKwEc0qkpK8QRFj3XIqfExstx3rQcKTR5xxRoI5dOHCRPdZIxJ8+IJ8an84XHoa7tyzpSiR9ABY8gmLOhUMSzAMrBrEkm17VN9TDNdlfTI8NnxbzcQWc4MW1hlqEWd1bhvlcuI8aeH8FklRUjlbCa5JaKRo8kAINrZAqb+orPfyjcMmrlgGR4fNMqhnHgEo6akXK3IKkta+9bLWcOiliMEsYaMhRib2spBHvtYVB43DDEpnfTiS0Zi7xqohO7KxldUCbVTRq0oDcnxGRukXgeMweAHFWPa7WbDrrxWVm41Pp9W+p1IjZl4YrhIs1QltQAt8id7tYt6VY/yn1QXFoFDyaiGCGRkmhjYyqWYtHJ+MsmNv0ri1t6k8t8P0kiy4aIxFL6eRJDndbJJjfNgV8S/Z5VaLy7phG0PSujEEhnkc3X5SrMxZbeViLVdUqYdri17bggaDS2zNFtYkzN1FrXkSD15JOXeJyTdaOdUEkExiYx3wayqwZQ26/N2JNrd6t6icO4dFAnTgjCLcsbXJLHuzMSSx9yb1KvXOqlpeSwW8vS8b4k81c2QLpaKSioKSWm0tJQhFFFFCElOpoFPFMoSU004U1qAhOFJSXooQgmi9FqAKEIptPtQBQhKBSGlpjChCUCloUUAUISmkpxptJCKUCkqFxzW9DTyzgXMcbMB5FreEH2vapNaXODRqUiYEqefQVG1fFIYh+MkG3cC7H6C9ePnmHUyg9Wd2++wI/urYfurvFxZhfIX7C9yLX+wH1/dXpKH+Hm/tX/pH3P4XPdjD8o81e8R10eu1gjnUiFQFRSbeI3OZ9GY2Xbtt71bcQ+G2mEinTdQq9yVazCPewu5ORB38idjc1iNRctkbX9q9v5E4imo0iSEXdSySXH5W3b1uGU/ea7jMOymwMZYC3X3VIqkmXXKyOh4tJDqptHqioRFj6bAGyEqxxY+SkRuQT5i35QrPc16mPUyr+Cwt1Af6QCxcW/NHl+kfL2rZ84cuxrJNrRLIHIJwsjKwSMICOxUqXbe5+Y7GsLzJzCsETQ6QWnkOLSABcb/mGwOX6V9rgjfcYDgWiqKze9puHO3Vt91toYsU5cRO6/1VSmi1CTaeKBFJmzWwZceosjhw5W4AxUHa98T53FbvhPLCwE6riOoTpRDMjcJkLAFi27dhYW3Nq8002jmlaGMEZRgJF4ioRrdQuSN73329BXPmTmbUa3BJpc44jitlwEjC46rpc+Mj7hc2tc335NFke/4iYifLwRzfx467VPqCCE2SJT+TGt8b+5JLH3YjyFRYtWwAXLt2BsbD2v8A9b1ERa7ItTIVQUiLVgHxID622r0jlbj+m1BAnjXqqgiEjgElNzY3va/mexsL2rywd6laCfF1Iv8AMAfsbY/fvVFegyswsdt3WU2PLV7vpNJHEMYo1QX7KoUX7dhUlqznKPGTOlpDdkUb+ZNyBf7Bjv7+1aU14vGUX0axY4zx38V0qTg4SFyqBx7hCauE6eVmCsVJKkBvCwYbkEeXpVjSGs7HuY4OaYI0VhAIgrMpyZANI2hEkvTdw5bJc7gqbA42t4R5V34dynp4tK+i8TxSMWbMgtc49ioFrFQR71fEUgq84usQQXnXN47+aiKTBs2R4blhP+yvS/8An6j6x/8Awq91fKmnfSDQDNIgQ11IzJByuWYG5J77VoKS1SdjsQ4gueTBkX2pCjTGgVDpuVYF0baC7tE2W7FcwWbK4IW1wQCNvKpXL3BY9HF0ImdlyZruQWu3fcAelWYFLaqnV6jwWucSCZPE71IU2gyBwWc4PyfBptS2rjeUu+dwzKV/GHI2AUH99HM/J0GukWSaSVSi4jAqBa5O+Sn1rQ2pRU/eq3aCpmOYCJ2xuUeyZlyxZZLgvw+02lmTURyzM0ZJAYoVuVK72QHz9al8F5Og0upfVRySl3zuGKlRmwY2AUHuPWtEKKb8ZXfOd5MiDyvb1KBRYIgaXWc4XyVBp9U2riklyYyXQlDHaS5K2xva5238hVdqvhho3YsrzICb4qyYj2XJSQPvra0hNNuPxLXZhUM2HgOil2FOIyqo5c5bg0SssAYliCzsQWa17AkAAAXOwHnVwTSUWqipUfUcXvMkqxrQ0QAi9FAFKRUE021PFNtT6RQmtTVFBpwp7EIooFKaSElFFFCEUUtqLUISUU6m0IVdxngsGqULqIg1vlbcOp/Rcbis+eVNZH/VOLTKvksyiW37R8vurYWpa0U8TUpjKDbcQCPIyoOptJnb4hY8cB4q2z8XAHqsCX/yH+dWHDuUokcS6iSXVSA3DTtmFPqkfyj99q0FFSdjKrhAIH8IDfoAfVIUmjjzJKjaHRrEpVSTk7uzHuzuxZifrYDyAA8qk0gFOrO5xcZKsAgQkopaLVFCSiiihNFAopRQkkooooQv/9k="></img>
      
      <div>
        <h2 className='checkout__title'> Your Shopping Basket</h2>
       
        {/* {basketitem} */}
         {/* {basketitem} */}
          {/* {basketitem} */}
           {/* {basketitem} */}
            {/* {basketitem} */}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout