# usa a utima versão do nove na verao alpane(versçao redusida sem e bem mais leve)
FROM node:latest 

# usa o diretorio para o aplicativo
WORKDIR /usr/app

# copia os arquivos package.json e package-lock para a maquina
COPY package.json yarn.lock ./
# roda um nom install
RUN yarn install

# copia os restyantes dos arquivos da aplicação (sem o node_module (dockeignore))
COPY . .

# comando para iniciar o server
CMD ["yarn", "start"]