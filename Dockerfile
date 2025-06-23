# Выкарыстоўваем Node.js 20
FROM node:20

# Ствараем рабочую дырэкторыю
WORKDIR /app

# Капіруем package.json і package-lock.json
COPY package*.json ./

# Усталёўваем залежнасці
RUN npm install

# Капіруем увесь код
COPY . .

# Калі TypeScript — кампілюем
RUN npm install -g typescript
RUN tsc

# Запускаем з кампіліраванай дырэкторыі (напрыклад, dist/index.js)
CMD ["node", "dist/index.js"]
