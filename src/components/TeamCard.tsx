interface Prop {
  index: number;
  item: {
    img: string;
    name: string;
    role: string;
  };
}

const TeamCard = ({ item }: Prop) => {
  const { img, name, role } = item;
  return <div></div>;
};

export default TeamCard;
