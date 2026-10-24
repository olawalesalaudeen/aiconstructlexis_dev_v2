# Chart reasoning
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Chart understanding, Chart comprehension  

## State of the Field

**Definition agreement:** Conflicting. The definitions are split across different phenomena: many papers define the construct as reasoning over structured tabular data, while many others define it as interpreting graphical charts or diagrams from images, and a few narrow it further to things like table schema relations or vision-language alignment for diagrams. Because these definitions apply the construct to different kinds of representations and different abilities, papers using them would often not be studying the same thing.

**Space of definitions.** Across papers, the prevailing usage treats chart reasoning as a model ability for interpreting information in charts, and many definitions also tie that interpretation to answering questions or carrying out complex tasks from chart content. A narrower line of work makes the reasoning component explicit, describing a latent ability to interpret visual chart elements and perform logical inference for complex analytical questions, or to analyze charts through inference, summarization, extraction, and computation. The main difference is thus between a broad chart understanding framing and a more specific question answering and inference framing.

**Space of facets.** Papers break the construct into both perceptual and inferential facets. One description of chart question answering presents it as testing multimodal perception ability and local reasoning ability, while another says chart understanding requires identifying visual cues, comprehending intricate interactions, and inferring values informed by prior knowledge; nearby labels such as chart understanding and chart comprehension are used for closely overlapping capacities. Some definitions also widen the scope to structure, content, trends, text, and numerical data, whereas one paper glosses chart reasoning more narrowly as chart analysis and summarization.

**Space of measurement.** No measurement instrument and no behavioral indicator are linked to chart reasoning. In the available descriptions, papers instead discuss it through chart question answering and complex CQA settings, including answering chart questions that require inference, summarization, extraction, or computation from charts.

## Sources

**[ChartMind: A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering](https://aclanthology.org/2025.emnlp-main.226.pdf)**
> The latent ability of a model to interpret visual chart elements and perform logical inference to answer complex, real-world analytical questions.

**[ChartMoE: Mixture of Diversely Aligned Expert Connector for Chart Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/c33cd281f8cd784626a57de340e43fe4-Paper-Conference.pdf) (as "Chart understanding")**
> The ability of a model to interpret visual charts, comprehend their structure and content, and perform complex tasks based on the information they convey.

**[Unmasking Deceptive Visuals: Benchmarking Multimodal Large Language Models on Misleading Chart Question Answering](https://aclanthology.org/2025.emnlp-main.695.pdf) (as "Chart comprehension")**
> The general ability of a model to understand and interpret information presented in graphical charts.
