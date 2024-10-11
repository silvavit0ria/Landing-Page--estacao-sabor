import React from "react";
import "./MainStyle.scss"

function Main(){
    
    return(
        <main>
            <section>
                <div className="container-intro">
                  <div className="intro-texto">
                  <h1>Estação do Sabor</h1>
                  <button> Realizar Pedido</button>
                    </div> 
                </div>
            </section>

        <section className="container-sabores-caseiros" >
                <h2 id="estacao-caseiros">Estação - Sabores caseiros</h2>
          <div className="sabores-caseiros" >
            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxWkdlm52Vu_Rfxyvkv-vPz_dsFq9vQtY_w&s" alt="imagem ilustrativa Peixe grelhado com legumes" />
                    <figcaption> 
                        <h2>Peixe grelhado com legumes</h2>
                        <p>filés de peixe vermelho, abobrinha, cebola picada, vagem,cenoura </p>
                        <strong>R$ 25,99</strong>
                    </figcaption>
                </figure>
            </div>

            <div className="item-home">
                <figure>
                    <img src="https://static.itdg.com.br/images/1200-630/2ef0175ba1ced9b2787b727536139d06/salpicao-de-frango-simples.jpg" alt="imagem ilustrativa Salpicão carioca" />
                    <figcaption> 
                        <h2>Salpicão carioca</h2>
                        <p>frango, maionese, pães sírios, cenoura</p>
                        <strong>R$ 25,99</strong>
                    </figcaption>
                </figure>
            </div>

            <div className="item-home">
                <figure>
                    <img src="https://anamariareceitas.com.br/wp-content/uploads/2022/10/Feijoada.jpg" alt="imagem ilustrativa  Feijuca Completa" />
                    <figcaption> 
                        <h2>Feijuca Completa</h2>
                        <p>Feijoada caseira com arroz branco, couve refogada, farofa crocante e laranja.</p>
                        <strong>R$ 25,99</strong>
                    </figcaption>
                </figure>
            </div>

            
            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwlZ4COryC-vw80CmRIlH1F6OYf9hBIR4JA&s" alt="imagem ilustrativa  Strogonoff Clássico" />
                    <figcaption> 
                        <h2>Strogonoff Clássico</h2>
                        <p>Estrogonofe de frango cremoso com batata palha crocante e arroz soltinho.</p>
                        <strong>R$ 25,99</strong>
                    </figcaption>
                </figure>
            </div>


            <div className="item-home">
                <figure>
                    <img src="https://damamaefitness.com.br/lojas/damamaefitness/conteudo/uploads/picadinho-com-pure-de-batata-inglesa-da-mamae-fitness-611b02c103d78.jpg" alt="imagem ilustrativa  Picadinho da Vovó" />
                    <figcaption> 
                        <h2>Picadinho da Vovó</h2>
                        <p>Picadinho de carne suculento com purê de batata e salada verde fresquinha.</p>
                        <strong>R$ 25,99</strong>
                    </figcaption>
                </figure>
            </div>


            <div className="item-home">
                <figure>
                    <img src="https://static.itdg.com.br/images/360-240/ec2a5e38702c60bf1ace0b5f1c8e9415/shutterstock-739787011.jpg" alt="imagem ilustrativa  Lasanha de Domingo" />
                    <figcaption> 
                        <h2>Lasanha de Domingo</h2>
                        <p>Lasanha à bolonhesa com molho de tomate e muito queijo derretido</p>
                        <strong>R$ 25,99</strong>
                    </figcaption>
                </figure>
            </div>


            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5qVxsJIttT_PDUdATmIJ_8bzT9-RkTlaIw&s" alt="imagem ilustrativa  Bacalhau à Portuguesa" />
                    <figcaption>
                    <h2>Bacalhau à Portuguesa</h2>
                    <p>Bacalhau ao forno com batatas, cebolas e azeitonas.</p>
                    <strong>R$ 45,99</strong>
                </figcaption>
                </figure>
            </div>


            <div className="item-home">
                <figure>
                    <img src="https://i.ytimg.com/vi/9_oHUhBRSO4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGHIgRSgoMA8=&rs=AOn4CLDNEehXZbazl4sQPfidKIRkyBJnuQ" alt="imagem ilustrativa  Panqueca à Moda da Casa" />
                    <figcaption>
                    <h2>Panqueca à Moda da Casa</h2>
                    <p>Panqueca recheada com carne moída, coberta com molho de tomate e queijo.</p>
                    <strong>R$ 22,99</strong>
                    </figcaption>
                </figure>
            </div>


            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5s6tuzJ1x-nO9bPqf8zH11N6h4hx5C7kXg&s" alt="imagem ilustrativa  Costela Assada com Doce" />
                    <figcaption>
                    <h2>Costela Assada com Doce</h2>
                    <p>Costela bovina macia, servida com batata doce assada e molho especial.</p>
                    <strong>R$ 39,99</strong>
                </figcaption>
                </figure>
            </div>


            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOv9zs61SFldsEFChm6R6NPwxv8Je-6ZMNw&s" alt="imagem ilustrativa Sopão de Lentilha<" />
                    <figcaption>
                    <h2>Sopão de Lentilha</h2>
                    <p>Sopa de lentilha com linguiça calabresa, batata e temperos da casa.</p>
                    <strong>R$ 21,99</strong>
                </figcaption>
                </figure>
            </div>
        </div>
           </section>
<section className="container-sabores-lanches" >
        <h2 id="estacao-lanches">Estação - Lanches</h2>  
        <div className="sabores-lanches">
        <div className="item-home">
                <figure>
                    <img src="https://almanaquedereceitas.com.br/wp-content/uploads/2023/02/DALL%C2%B7E-2023-02-26-15.03.27-Sanduiche-de-Frango-Grelhado.png" alt="imagem ilustrativa Sanduíche de Frango Grelhado<" />
                    <figcaption>
                    <h2>Sanduíche de Frango Grelhado</h2>
                    <p>Peito de frango grelhado, servido em pão ciabatta com alface, tomate e maionese temperada.</p>
                    <strong>R$ 24,99</strong>
                </figcaption>
                </figure>
            </div>

            
            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyemz68rjDa7x36cLKFnkcL6Km6Oa_Yd39Yw&s" alt="imagem ilustrativa Hambúrguer Gourmet<" />
                    <figcaption>
                    <h2>Hambúrguer Gourmet</h2>
                    <p>Hambúrguer suculento de carne bovina, queijo cheddar, bacon crocante e molho barbecue, servido em pão brioche.</p>
                    <strong>R$ 32,99</strong>
                </figcaption>
                </figure>
            </div>

            
            <div className="item-home">
                <figure>
                    <img src="https://assets.unileversolutions.com/recipes-v2/35624.jpg" alt="imagem ilustrativa Wrap de Vegetais<" />
                    <figcaption>
                    <h2>Wrap de Vegetais</h2>
                    <p>Tortilla recheada com mix de vegetais grelhados, molho de iogurte e ervas finas.</p>
                    <strong>R$ 19,99</strong>
                </figcaption>
                </figure>
            </div>

            
            <div className="item-home">
                <figure>
                    <img src="https://static.itdg.com.br/images/1200-675/788628692540540f9388267b2e9c1cca/353028-original.jpg" alt="imagem ilustrativa Batata Frita com Queijo<" />
                    <figcaption>
                    <h2>Batata Frita com Queijo</h2>
                    <p>Porção generosa de batatas fritas, cobertas com queijo derretido e ervas frescas.</p>
                    <strong>R$ 18,99</strong>
                </figcaption>
                </figure>
            </div>

            
            <div className="item-home">
                <figure>
                    <img src="https://www.socilink.com/wp-content/uploads/2020/01/62-3.jpg" alt="imagem ilustrativa Taco de Carne Moída<" />
                    <figcaption>
                    <h2>Taco de Carne Moída</h2>
                    <p>Casquinha crocante recheada com carne moída temperada, queijo, alface e guacamole.</p>
                    <strong>R$ 21,99</strong>
                </figcaption>
                </figure>
            </div>
              
         
              
            <div className="item-home">
                <figure>
                    <img src="https://www.perdigao.com.br/assets/_images/b5bbe5f433483c571273a0cbad109c1e7cf2444f.webp" alt="imagem ilustrativa Sopão de Lentilha<" />
                    <figcaption>
                    <h2>Panini de Presunto e Queijo</h2>
                    <p>Pão ciabatta grelhado recheado com presunto, queijo muçarela e orégano.</p>
                    <strong>R$ 22,99</strong>
                </figcaption>
                </figure>
            </div>
              
            <div className="item-home">
                <figure>
                    <img src="https://i.panelinha.com.br/i1/228-bk-5853-pate.webp" alt="imagem ilustrativa Sopão de Lentilha<" />
                    <figcaption>
                    <h2>Pasta de Atum</h2>
                    <p>Atum misturado com maionese, cebola roxa e azeitonas, servido em torradas crocantes.</p>
                    <strong>R$ 19,99</strong>
                </figcaption>
                </figure>
            </div>
              
            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOtVmzBtjmFiBB7ytgjIza0eXMmtbmSlUDA&s" alt="imagem ilustrativa Quiche de Espinafre<" />
                    <figcaption>
                    <h2>Quiche de Espinafre</h2>
                    <p>Deliciosa quiche de espinafre e queijo, servida quente com salada verde.</p>
                    <strong>R$ 25,99</strong>
                </figcaption>
                </figure>
            </div>
              
            <div className="item-home">
                <figure>
                    <img src="https://vocegastro.com.br/app/uploads/2021/07/coxinha-de-frango.jpg" alt="imagem ilustrativa Coxinha de Frango<" />
                        <figcaption>
                    <h2>Coxinha de Frango</h2>
                    <p>Massa fina e crocante recheada com frango desfiado, servida com molho de pimenta.</p>
                    <strong>R$ 14,99</strong>
                </figcaption>
                </figure>
            </div>
              
            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFbKJvtpsQjh1-f-VHBpxqNr3bGWsrqzVtQ&s" alt="imagem ilustrativa Salada Caesar com Frango<" />
                    <figcaption>
                    <h2>Salada Caesar com Frango</h2>
                    <p>Alface romana, croutons, peito de frango grelhado e molho Caesar cremoso.</p>
                    <strong>R$ 27,99</strong>
                </figcaption>
                </figure>
            </div>
              
            <div className="item-home">
                <figure>
                    <img src="https://www.allrecipes.com/thmb/XT7-9MROYJZvNyQR4J40HGOVDmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg" alt="imagem ilustrativa Sushi Rolls<" />
                    <figcaption>
                    <h2>Sushi Rolls</h2>
                    <p>Rolinho de arroz, algas e peixe fresco, acompanhado de molho shoyu e wasabi.</p>
                    <strong>R$ 39,99</strong>
                </figcaption>
                </figure>
            </div>
            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi39_gpYonaIWC8TyMFl2saYIkNpq-42kGiQ&s" alt="imagem ilustrativa Burguer Vegetariano<" />
                    <figcaption>
                    <h2>Burguer Vegetariano</h2>
                    <p>Hambúrguer de grão-de-bico com especiarias, servido com salada e molho tahine.</p>
                    <strong>R$ 29,99</strong>
                </figcaption>
                </figure>
            </div>
            <div className="item-home">
                <figure>
                    <img src="https://static1.minhavida.com.br/recipes/26/78/5f/3b/avocado-toast-com-ovo-orig-1.jpg" alt="imagem ilustrativa Torrada de Abacate<" />
                    <figcaption>
                    <h2>Torrada de Abacate</h2>
                    <p>Pão integral com abacate amassado, azeite e pimenta-do-reino, servido com ovo poché.</p>
                    <strong>R$ 21,99</strong>
                </figcaption>
                </figure>
            </div>
            <div className="item-home">
                <figure>
                    <img src="https://static.itdg.com.br/images/360-240/bdf5859e802e5edf6c66d25f4927b2bc/shutterstock-1658158945.jpg" alt="imagem ilustrativa Pão de Alho<" />
                    <figcaption>
                <h2>Pão de Alho</h2>
                <p>Pão italiano grelhado com manteiga de alho e ervas, perfeito como aperitivo.</p>
                <strong>R$ 16,99</strong>
            </figcaption>
                </figure>
            </div>
            <div className="item-home">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaogCXbdzbTLZJF1g_vVPh8DVyCXzXW40yw&s" alt="imagem ilustrativa Bolinhos de Queijo<" />
                    <figcaption>
                <h2>Bolinhos de Queijo</h2>
                <p>Deliciosos bolinhos fritos de queijo, crocantes por fora e cremosos por dentro.</p>
                <strong>R$ 15,99</strong>
            </figcaption>
                </figure>
            </div>
            <div className="item-home">
                <figure>
                    <img src="https://cuidai.com.br/alimentacao/busca-de-alimentos/Content/img/alimentos/658-pastel-de-carne.jpg" alt="imagem ilustrativa Pastel de Carne<" />
                    <figcaption>
                <h2>Pastel de Carne</h2>
                <p>Massa crocante recheada com carne moída temperada, servido com molho vinagrete.</p>
                <strong>R$ 12,99</strong>
            </figcaption>
                </figure>
            </div>
            <div className="item-home">
                <figure>
                    <img src="https://www.plantte.com/wp-content/uploads/2022/02/chips-de-batata-doce-1.jpg" alt="imagem ilustrativa Chips de Batata Doce<" />
                    <figcaption>
                <h2>Chips de Batata Doce</h2>
                <p>Batatas doces cortadas em fatias finas e assadas, temperadas com sal e pimenta.</p>
                <strong>R$ 10,99</strong>
            </figcaption>
                </figure>
            </div>

            <div className="item-home">
                <figure>
                    <img src="https://static.itdg.com.br/images/640-440/5d139b703a9df7604abf863a3bd76aa6/252863-shutterstock-1938293728.jpg" alt="imagem ilustrativa Brownie de Chocolate<" />
                    <figcaption>
                    <h2>Brownie de Chocolate</h2>
                    <p>Delicioso brownie de chocolate, com textura fudgy, coberto com calda de chocolate e servido com uma bola de sorvete de baunilha.</p>
                    <strong>R$ 19,99</strong>
                </figcaption>
                </figure>
            </div>


        </div>
        </section>
        <section className="container-contato" id="container-contato">
           
        <form action="/submit" method="post">
        <legend>Ajude-nos a melhorar sua experiência!</legend>
            
            <input type="text"
                id="nome"
                name="nome"
                placeholder="Nome:" 
                required/>

            <input type="email"
                id="email"
                name="email"
                placeholder="Email:" 
                required/>

            <textarea name="mensagem"
                id="mensagem"
                placeholder="Como podemos melhorar? Compartilhe sua sugestão!"
                required></textarea>
                
            <button type="submit">Enviar</button>
            </form>
        </section>
        </main>
    )
}

export default Main