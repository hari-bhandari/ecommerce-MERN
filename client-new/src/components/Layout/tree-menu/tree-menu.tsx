import React, {useState, useEffect} from 'react';
import {usePrevious, useMeasure} from '../../../assets/hooks';
import {useSpring, animated} from 'react-spring';
import {Frame, Title, Content, Header, IconWrapper} from './tree-menu.style';
import {Button} from '@/components/Others/button/button';
import {ArrowNext} from '@/assets/icons/ArrowNext';

import {CategoryIcon} from "@/components/Layout/header/menu/left-menu/LeftMenu";

const Tree = React.memo(
    ({
         children,
         name,
         icon,
         // isOpen,
         onClick,
         dropdown,
         depth,
         defaultOpen = false,
     }: any) => {
        const [isOpen, setOpen] = useState(defaultOpen);
        useEffect(() => {
            setOpen(defaultOpen);
        }, [defaultOpen]);
        const previous = usePrevious(isOpen);
        const [bind, {height: viewHeight}] = useMeasure();
        const {height, opacity, transform} = useSpring<any>({
            from: {height: 0, opacity: 0, transform: 'translate3d(20px,0,0)'},
            to: {
                height: isOpen ? viewHeight : 0,
                opacity: isOpen ? 1 : 0,
                transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
            },
        });
        // const Icon = icon ? Icons[icon] : depth === 'child' ? Icons['Minus'] : null;
        // @ts-ignore
        return (
            <Frame depth={depth}>
                <Header open={isOpen} depth={depth} className={depth}>
                    <IconWrapper depth={depth}>
                        <CategoryIcon link={icon} height={"25px"} width={"25px"} />
                    </IconWrapper>
                    <Title onClick={onClick} depth={depth}>{name}</Title>

                    {dropdown === true && (
                        <Button
                            onClick={() => setOpen(!isOpen)}
                            variant='text'
                            className='toggleButton'
                        >

                            <ArrowNext/>
                        </Button>
                    )}
                </Header>
                <Content
                    style={{
                        opacity,
                        height: isOpen && previous === isOpen ? 'auto' : height,
                    }}
                >
                    <animated.div style={{transform}} {...bind} children={children}/>
                </Content>
            </Frame>
        );
    }
);

type Props = {
    className?: any;
    data: any;
    onClick: (slug: string) => void;
    active?: string | string[];
};
export const TreeMenu: React.FC<Props> = ({
                                              data,
                                              className,
                                              onClick,
                                              active,
                                          }) => {
    const handler = (children: any) => {
        return children.map((subOption: any) => {
            if (!subOption.subCategory) {
                return (
                    <Tree
                        key={subOption._id}
                        name={subOption.name}
                        icon={subOption?.image}
                        depth='child'
                        onClick={() => onClick(subOption.id)}
                        defaultOpen={active === subOption.id}
                    />
                );
            }
            return (
                <Tree
                    key={subOption._id}
                    name={subOption.name}
                    icon={subOption.image}
                    dropdown={!subOption.subCategory.length ? false : true}
                    depth='parent'
                    onClick={() => onClick(subOption.id)}
                    defaultOpen={
                        active === subOption.id ||
                        subOption.subCategory.some((item: any) => item.id === active)
                    }
                >
                    {handler(subOption.subCategory)}
                </Tree>
            );
        });
    };
    return <>{handler(data?.data)}</>;
};
