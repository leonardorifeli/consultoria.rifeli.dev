document.addEventListener('DOMContentLoaded', function() {
    // Schema.org JSON-LD para SEO
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Leonardo Rifeli - Consultoria Tech & Mentoria",
        "url": "https://rifeli.dev",
        "logo": "https://rifeli.dev/img/favicon.svg",
        "image": "https://avatars.githubusercontent.com/u/6767689?v=4",
        "description": "Consultoria especializada em Engenharia de Dados, IA e Arquitetura de Software. Transforme dados complexos em insights acionáveis.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Antônio Carlos",
            "addressRegion": "SC",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-27.5197",
            "longitude": "-48.7662"
        },
        "telephone": "+5548999999999",
        "email": "contato@rifeli.dev",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "sameAs": [
            "https://linkedin.com/in/leonardorifeli",
            "https://github.com/leonardorifeli",
            "https://rifeli.dev"
        ],
        "priceRange": "$$$",
        "founder": {
            "@type": "Person",
            "name": "Leonardo Rifeli",
            "jobTitle": "CTO & Co-Founder at Harmo",
            "description": "Especialista em engenharia de dados, IA e arquitetura de software com mais de 15 anos de experiência.",
            "image": "https://avatars.githubusercontent.com/u/6767689?v=4",
            "sameAs": [
                "https://linkedin.com/in/leonardorifeli",
                "https://github.com/leonardorifeli",
                "https://rifeli.dev"
            ]
        },
        "offers": [
            {
                "@type": "Offer",
                "name": "Consultoria em IA & GenAI",
                "description": "Implementação de soluções de IA generativa, pipelines RAG, embeddings e integração de LLMs."
            },
            {
                "@type": "Offer",
                "name": "Engenharia de Dados",
                "description": "Desenvolvimento de pipelines de dados robustos, ETL, ingestão em tempo real e arquiteturas de dados escaláveis."
            },
            {
                "@type": "Offer",
                "name": "Arquitetura de Software",
                "description": "Design e implementação de arquiteturas escaláveis, microserviços e sistemas distribuídos."
            },
            {
                "@type": "Offer",
                "name": "Cloud & DevOps",
                "description": "Estratégias de cloud-native, infraestrutura como código e automação."
            },
            {
                "@type": "Offer",
                "name": "Mentoria Tech",
                "description": "Orientação personalizada para profissionais e equipes que desejam evoluir em engenharia de dados, IA e desenvolvimento de software."
            },
            {
                "@type": "Offer",
                "name": "Transformação Digital",
                "description": "Estratégias para modernização de sistemas legados e adoção de novas tecnologias."
            }
        ],
        "knowsAbout": [
            "Engenharia de Dados",
            "Inteligência Artificial",
            "GenAI",
            "RAG pipelines",
            "Embeddings",
            "Prompt engineering",
            "LangChain",
            "LangGraph",
            "LLMs",
            "Arquitetura de Software",
            "Microserviços",
            "Golang",
            "Python",
            "AWS",
            "Kubernetes",
            "Cloud-Native"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Consultoria Tech",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Consultoria em IA & GenAI",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Arquitetura de sistemas de IA"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Implementação de RAG pipelines"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Prompt engineering"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Integração com LLMs"
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Engenharia de Dados",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Pipelines de dados com Airflow"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "ETL com Python"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Ingestão em tempo real"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Arquiteturas de dados multi-tenant"
                            }
                        }
                    ]
                }
            ]
        }
    });
    document.head.appendChild(schemaScript);
});