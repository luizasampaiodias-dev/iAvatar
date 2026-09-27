# iAvatar

# Objetivo

A API foi criada para permitir que o usuário envie uma selfie e, com o auxílio de inteligência artificial, gere uma imagem profissional adequada para utilização no LinkedIn. O objetivo é transformar uma foto pessoal em uma versão mais refinada, segura e alinhada ao perfil profissional desejado, facilitando a criação de uma imagem de apresentação para uso em redes profissionais.

# Tecnologias utilizadas

• Python<br>
• FastAPI<br>
• Uvicorn<br>
• JavaScript<br>
• HTML<br>
• CSS<br>

# Dependências

• As dependências estão listadas no arquivo /backend/requirements.txt 
-FastAPI
-Uvicorn
-python-multipart

# Endpoints

• GET /health<br>
• POST /upload

# Como executar o Projeto

cd backend<br>
python -m venv venv<br>

# Windows<br>
venv\Scripts\activate<br>
pip install -r requirements.txt<br>
uvicorn app.main:app --reload


