FROM jenkins/jenkins:lts
# if we want to install via apt

USER root

#install nodejs
RUN apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_9.x | bash - \
  && apt-get install -y nodejs \
  && curl -L https://www.npmjs.com/install.sh | sh \
  && apt-get install sshpass
USER jenkins
