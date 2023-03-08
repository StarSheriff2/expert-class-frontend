/* eslint-disable camelcase */
import { rest } from 'msw';

const baseURL = 'https://expert-class-production.up.railway.app/api/v1/';

const mockApiResponses = {
  signUp: {
    status: 'created',
    logged_in: true,
    user: {
      id: 41,
      username: 'Goku',
      name: 'Kakarot',
      created_at: '2021-12-02T04:07:08.069Z',
      updated_at: '2021-12-02T04:07:08.069Z',
    },
  },
  signIn: {
    status: 'created',
    logged_in: true,
    user: {
      id: 1,
      username: 'john_doe',
      name: 'john',
      created_at: '2020-11-05T23:43:07.938Z',
      updated_at: '2020-11-05T23:43:07.938Z',
    },
  },
  signedIn: {
    logged_in: false,
  },
  logout: {
    logged_out: true,
  },
  classes: [
    {
      id: 19,
      title: 'English Composition',
      description: 'Learn how to draft professional essays',
      instructor: 'Jeremy Campbell',
      duration: 4,
      created_at: '2021-11-11T04:20:38.165Z',
      updated_at: '2021-11-11T04:20:38.181Z',
      course_image_url: './images/fakeExpertPic1.jpeg',
    },
    {
      id: 21,
      title: 'Singing',
      description: 'Learn to sing',
      instructor: 'Jackie',
      duration: 5,
      created_at: '2021-11-11T14:20:44.084Z',
      updated_at: '2021-11-11T14:20:44.097Z',
      course_image_url: './images/fakeExpertPic2.jpeg',
    },
  ],
  cities: [
    {
      id: 33,
      name: 'Ciudad de Mexico, Mexico',
      created_at: '2021-11-05T23:43:07.943Z',
      updated_at: '2021-11-05T23:43:07.943Z',
    },
    {
      id: 34,
      name: 'New York, USA',
      created_at: '2021-11-05T23:43:07.953Z',
      updated_at: '2021-11-05T23:43:07.953Z',
    },
    {
      id: 35,
      name: 'Abuja, Nigeria',
      created_at: '2021-11-05T23:43:07.959Z',
      updated_at: '2021-11-05T23:43:07.959Z',
    },
    {
      id: 36,
      name: 'São Paulo, Brasil',
      created_at: '2021-11-05T23:43:07.965Z',
      updated_at: '2021-11-05T23:43:07.965Z',
    },
  ],
  addClass: {
    message: 'Course successfully created',
    status: 'created',
    course: {
      id: 22,
      title: 'Landscaping',
      description:
        'Learn about the latest techniques and trends in this ever evolving field.',
      instructor: 'Andrés Segovia',
      duration: 5,
      created_at: new Date(Date.now()).toISOString().substr(0, 10),
      updated_at: new Date(Date.now()).toISOString().substr(0, 10),
      course_image_url:
        'https://res.cloudinary.com/starsheriff/image/upload/fake_image.jpeg',
    },
  },
  reservations: [
    {
      user: 'john',
      course: 'Singing',
      city: 'New York, USA',
      date: '2021-11-13',
      id: 36,
      created_at: '2021-11-11T14:21:26.409Z',
      updated_at: '2021-11-11T14:21:26.409Z',
    },
    {
      user: 'john',
      course: 'Yoga',
      city: 'New York, USA',
      date: '2021-11-14',
      id: 37,
      created_at: '2021-11-12T16:04:34.791Z',
      updated_at: '2021-11-12T16:04:34.791Z',
    },
    {
      user: 'john',
      course: 'Photography',
      city: 'Abuja, Nigeria',
      date: '2021-11-20',
      id: 41,
      created_at: '2021-11-14T21:31:05.624Z',
      updated_at: '2021-11-14T21:31:05.624Z',
    },
  ],
  reserveCourse(date) {
    return {
      reservation: {
        user: 'john',
        course: 'English Composition',
        city: 'New York, USA',
        date,
        id: 47,
        created_at: new Date(Date.now() + 3600 * 1000 * 24)
          .toISOString()
          .substr(0, 10),
        updated_at: new Date(Date.now() + 3600 * 1000 * 24)
          .toISOString()
          .substr(0, 10),
      },
      message: 'Reservation created successfully',
      status: 200,
    };
  },
};

const handlers = [
  rest.post(`${baseURL}users`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockApiResponses.signUp))
  ),
  rest.get(`${baseURL}signed_in`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockApiResponses.signedIn))
  ),
  rest.post(`${baseURL}sign_in`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockApiResponses.signIn))
  ),
  rest.delete(`${baseURL}sign_out`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockApiResponses.logout))
  ),
  rest.get(`${baseURL}courses`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockApiResponses.classes))
  ),
  rest.post(`${baseURL}courses`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockApiResponses.addClass))
  ),
  rest.delete(`${baseURL}courses/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const deletedClass = mockApiResponses.classes.filter(
      (c) => c.id === Number(id)
    );

    return res(
      ctx.status(200),
      ctx.json({
        course: deletedClass[0],
        message: 'Course successfully deleted',
        status: 200,
      })
    );
  }),
  rest.get(`${baseURL}cities`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockApiResponses.cities))
  ),
  rest.get(`${baseURL}reservations`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockApiResponses.reservations))
  ),
  rest.post(`${baseURL}reservations`, (req, res, ctx) => {
    const { reservation } = req.body;
    const { date } = reservation;

    return res(ctx.status(200), ctx.json(mockApiResponses.reserveCourse(date)));
  }),
];

export default handlers;
