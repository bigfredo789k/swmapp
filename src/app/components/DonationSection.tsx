import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import donationImage from '../../assets/fam8.png';

export const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [coverFees, setCoverFees] = useState(true);
  const [donationType, setDonationType] = useState('monthly');

  const amounts = [10, 20, 30, 40];
  const feePercentage = 0.03;

  const calculateTotal = () => {
    const baseAmount = selectedAmount || 0;
    const fee = coverFees ? baseAmount * feePercentage : 0;
    return {
      fee: fee.toFixed(2),
      total: (baseAmount + fee).toFixed(2)
    };
  };

  const { fee, total } = calculateTotal();

  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-white relative overflow-hidden">
      {/* Background decorative elements similar to screenshot */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200 via-purple-100 to-white opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Make a donation</h2>
          <p className="text-lg text-gray-600">Support our mission by contributing today.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-16">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 max-w-2xl flex">
            <div className="rounded-3xl overflow-hidden shadow-xl w-full">
              <img 
                src={donationImage} 
                alt="Community gathering" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Donation Form */}
          <div className="w-full lg:w-1/2 max-w-md">
            <Card className="bg-[#4B4B65] text-white border-none shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                {/* Amount Selection */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {amounts.map((amount) => (
                    <div key={amount} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`amount-${amount}`} 
                        checked={selectedAmount === amount && !isCustomAmount}
                        onCheckedChange={() => {
                          setSelectedAmount(amount);
                          setIsCustomAmount(false);
                        }}
                        className="border-gray-400 data-[state=checked]:bg-white data-[state=checked]:text-[#4B4B65]"
                      />
                      <Label htmlFor={`amount-${amount}`} className="text-sm font-medium text-gray-300 cursor-pointer">
                        ${amount.toFixed(2)}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <Checkbox 
                    id="custom-amount" 
                    checked={isCustomAmount}
                    onCheckedChange={(checked) => {
                      setIsCustomAmount(!!checked);
                      if (checked) setSelectedAmount(null);
                    }}
                    className="border-gray-400 data-[state=checked]:bg-white data-[state=checked]:text-[#4B4B65]"
                  />
                  <Label htmlFor="custom-amount" className="text-sm font-medium text-gray-300 cursor-pointer">
                    Custom Amount
                  </Label>
                </div>

                {/* Donation Type Dropdown */}
                <div className="mb-6">
                  <Select value={donationType} onValueChange={setDonationType}>
                    <SelectTrigger className="w-full bg-[#3E3E55] border-none text-white h-12 rounded-lg">
                      <SelectValue placeholder="Select donation type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#3E3E55] text-white border-gray-600">
                      <SelectItem value="monthly">Monthly Donation</SelectItem>
                      <SelectItem value="one-time">One-time Donation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Cover Fees Checkbox */}
                <div className="flex items-center space-x-2 mb-6">
                  <Checkbox 
                    id="cover-fees" 
                    checked={coverFees}
                    onCheckedChange={(checked) => setCoverFees(!!checked)}
                    className="border-gray-400 data-[state=checked]:bg-white data-[state=checked]:text-[#4B4B65]"
                  />
                  <Label htmlFor="cover-fees" className="text-sm text-gray-300 cursor-pointer">
                    Support us by covering the fees we have to pay
                  </Label>
                </div>

                {/* Summary */}
                <div className="space-y-2 mb-8 text-sm">
                  {coverFees && (
                    <div className="flex justify-between text-[#8A8AB5]">
                      <span>3% Cover the Fee</span>
                      <span>${fee}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-[#8A8AB5]">
                    <span>Total per {donationType === 'monthly' ? 'month' : 'donation'}</span>
                    <span>${total}</span>
                  </div>
                </div>

                {/* Donate Button */}
                <Button className="w-full bg-[#7C7CFF] hover:bg-[#6B6BE5] text-white font-bold py-6 rounded-full text-lg tracking-wide">
                  DONATE
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};


