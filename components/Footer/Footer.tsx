import React from 'react'

import * as S from './Footer.style'
import * as Icons from 'react-feather'

const Footer: React.FC = () => {
    const [year, setYear] = React.useState<number | null>(null)

    React.useEffect(() => {
        const date = new Date()
        setYear(date.getFullYear())
    }, [])

    return (
        <S.FooterBox>
            <S.FooterInfoContainer>
                <S.MainText>
                    <Icons.Code /> with <Icons.Heart /> and{' '}
                    <S.FooterTextLink href="https://nextjs.org/" target="_blank">
                        Next.js
                    </S.FooterTextLink>
                </S.MainText>
            </S.FooterInfoContainer>
            <S.FooterInfoContainer>
                <S.MainText>© {year} Yujin</S.MainText>
                <S.FooterLink href="https://github.com/euphorxa" target="_blank">
                    <Icons.GitHub />
                </S.FooterLink>
                <S.FooterLink href="https://twitter.com/ulypse" target="_blank">
                    <Icons.Twitter />
                </S.FooterLink>
                <S.FooterLink href="https://inv.wtf/endeavor" target="_blank">
                    <Icons.Discord />
                </S.FooterLink>
            </S.FooterInfoContainer>
        </S.FooterBox>
    )
}

export default Footer