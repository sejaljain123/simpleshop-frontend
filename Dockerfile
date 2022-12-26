FROM node:18
WORKDIR /app
COPY ./package.json ./

ENV REACT_APP_API_URL="http://43.204.156.28/api"

RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]


