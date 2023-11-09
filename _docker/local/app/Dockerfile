FROM node:21.1.0

ENV TZ=America/Sao_Paulo
ENV DEBIAN_FRONTEND noninteractive

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update -yqq && \
  apt-get upgrade -y && \
  apt-get install -y --no-install-recommends \
  git \
  wget \
  curl \
  unzip \
  nano \
  vim \
  zsh

RUN usermod --shell $(which zsh) node

RUN npm install -g npm@latest

RUN npm install -g @nestjs/cli

WORKDIR /app

COPY . /app

USER node:node

RUN curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh; zsh && \
  git clone https://github.com/zsh-users/zsh-autosuggestions.git /home/node/.oh-my-zsh/plugins/zsh-autosuggestions && \
  git clone https://github.com/zsh-users/zsh-syntax-highlighting.git /home/node/.oh-my-zsh/plugins/zsh-syntax-highlighting

COPY .zshrc /home/node/.zshrc

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
