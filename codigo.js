// =============================================
// NOVAMENTE — Código JavaScript (iniciante)
// =============================================

// Função chamada quando o usuário clica em "Experimente grátis"
function mostrarBoasVindas() {

  // 1) Exibe um alerta de boas-vindas na tela
  alert("👋 Bem-vindo(a) à NovaMente!\n\nSua jornada de aprendizado começa agora.\nGanhe 30 dias grátis no plano Pro! 🚀");

  // 2) Pega o elemento de texto pelo ID e muda o conteúdo dele
  var texto = document.getElementById("mensagem-boas-vindas");
  texto.textContent = "✅ Obrigado pelo interesse! Role até a seção de Planos e escolha o Pro para começar gratuitamente.";

  // 3) Mostra o painel que estava escondido
  var painel = document.getElementById("painel-boas-vindas");
  painel.style.display = "block";

  // 4) Registra uma mensagem no console do navegador
  console.log("O usuário clicou no botão de boas-vindas!");
  console.log("Painel exibido com sucesso.");

}
