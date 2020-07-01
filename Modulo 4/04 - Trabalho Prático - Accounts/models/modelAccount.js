import mongoose from 'mongoose';

const accountScheme = mongoose.Schema({
  agencia: { type: Number, required: true },
  conta: { type: Number, required: true },
  name: { type: String, required: true },
  balance: { type: Number, required: true },
});

const accountModel = mongoose.model('account', accountScheme, 'account');

export default accountModel;
