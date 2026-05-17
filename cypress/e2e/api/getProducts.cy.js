import Ajv from 'ajv';
import { ProductService } from '../../services/productService';
import { productSchema } from '../../schemas/productSchema';

describe('Get Products API', () => {
  it(
    'Should list products successfully',
    {
      tags: ['@smoke', '@api'],
    },
    () => {
      ProductService.getProducts().then((response) => {
        expect(response.status).to.eq(200);

        expect(response.duration).to.be.lessThan(4000);

        const ajv = new Ajv();

        const validate = ajv.compile(productSchema);

        const valid = validate(response.body);

        expect(valid).to.eq(true);
      });
    }
  );
});
