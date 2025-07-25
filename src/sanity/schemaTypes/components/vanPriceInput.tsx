import { NumberInputProps, useFormValue } from 'sanity';
import { Stack, Text } from '@sanity/ui';

const vanPriceInput = (props: NumberInputProps) => {
  const price = useFormValue(['price']) as number | undefined;

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      {typeof props.value === 'number' && price ? (
        <Text size={1}>
          Rental price is{' '}
          <span className="font-bold text-brand-green">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(props.value)}{' '}
          </span>
          per day.
        </Text>
      ) : null}
    </Stack>
  );
};

export default vanPriceInput;
