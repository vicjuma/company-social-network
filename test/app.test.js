const request = require('supertest');
const app = require('../server');

// TEST FOR /CREATE-USER ROUTE
describe('post /auth/create-user', () => {
  const data = {
    firstName: 'victor',
    lastName: 'oluoch',
    email: 'oluochvee@yahoo.com',
    password: 'jumavic',
    gender: 'male',
    jobRole: 'project manager',
    department: 'SCRUM',
    address: 'CA',
  };

  it('creating a new employee account', (done) => {
    request(app)
      .post('/auth/create-user')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// POST /AUTH/SIGNIN
describe('Post /auth/signin', () => {
  const data = {
    email: 'oluochvee@yahoo.com',
    password: 'jumavic',
  };
  it('logging in an employee', (done) => {
    request(app)
      .post('/auth/signin')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// POST /GIFS
describe('Post /gifs', () => {
  const data = {
    image: 'https://cloudbary.com/160x160',
    title: 'players celebrating',
  };
  it('creating a gif', (done) => {
    request(app)
      .post('/gifs')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});


// POST /ARTICLES
describe('Post /articles', () => {
  const data = {
    title: 'using the marquee tool',
    article: 'it is very easy to use this ps tool',
  };
  it('creating a new article', (done) => {
    request(app)
      .post('/articles')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// PUT ARTICLES/:ID
describe('Put /articles/:id', () => {
  const data = {
    title: 'intergration with jenkins',
    article: 'jenkins is one of the devops tools used for CI/CD',
  };
  it('editing an article', (done) => {
    request(app)
      .put('/articles/:id')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// DELETE ARTICLES/:ID
describe('Delete /articles/:id', () => {
  it('should delete an article', (done) => {
    request(app)
      .delete('/articles/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// DELETE /GIFS/:ID
describe('Delete /gifs/:id', () => {
  it('should delete a gif', (done) => {
    request(app)
      .delete('/gifs/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// POST /ARTICLES/:ID/COMMENTS
describe('Post /articles/:id/comments', () => {
  const data = {
    comment: 'what an awesome tut',
  };
  it('should create a new article comment', (done) => {
    request(app)
      .post('/articles/:id/comments')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// POST /GIFS/:ID/COMMENTS
describe('Post /gifs/:id/comments', () => {
  const data = {
    email: 'oluochvee@yahoo.com',
    password: 'jumavic',
  };
  it('should create a new gif comment', (done) => {
    request(app)
      .post('/gifs/:id/comments')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('GET /feeds', () => {
  it('get all article and gif posts', (done) => {
    request(app)
      .get('/feed')
      .set('Accept', 'application/json')
      .expect('content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /articles/:id', () => {
  it('gets a single article', (done) => {
    request(app)
      .get('/articles/:id')
      .set('Accept', 'application/json')
      .expect('content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /gifs/:id', () => {
  it('gets a single gif post', (done) => {
    request(app)
      .get('/gifs/:id')
      .set('Accept', 'application/json')
      .expect('content-Type', /json/)
      .expect(200, done);
  });
});
