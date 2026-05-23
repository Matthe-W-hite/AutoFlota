import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import PickupChecklistScreen from '../src/screens/PickupChecklistScreen';
import { pickupChecklistItems } from '../src/constants/mockData';

const navigationMock = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('PickupChecklistScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders checklist items and disabled submit button initially', () => {
    render(<PickupChecklistScreen navigation={navigationMock} />);

    pickupChecklistItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeTruthy();
    });

    const button = screen.getByText('ROZPOCZNIJ TRASĘ');
    expect(button).toBeTruthy();
  });

  it('does not navigate when submit is pressed before all items are checked', () => {
    render(<PickupChecklistScreen navigation={navigationMock} />);

    fireEvent.press(screen.getByText('ROZPOCZNIJ TRASĘ'));

    expect(navigationMock.navigate).not.toHaveBeenCalled();
  });

  it('navigates to Success after all checklist items are checked', () => {
    render(<PickupChecklistScreen navigation={navigationMock} />);

    pickupChecklistItems.forEach((item) => {
      fireEvent.press(screen.getByText(item.label));
    });

    fireEvent.press(screen.getByText('ROZPOCZNIJ TRASĘ'));

    expect(navigationMock.navigate).toHaveBeenCalledWith('Success');
  });
});
